#!/usr/bin/env python3
from __future__ import annotations

import argparse
import re
import subprocess
from dataclasses import dataclass
from pathlib import Path


LEETCODE_DIR = Path(__file__).resolve().parents[1]
REPO_ROOT = LEETCODE_DIR.parent
README_PATH = LEETCODE_DIR / "README.md"

MANAGED_SUFFIXES = {".py", ".ts"}
EXCLUDED_PATHS = {
    "linked-list/update_readme.py",
    "trees/tree-node.ts",
}


@dataclass(frozen=True)
class Section:
    title: str
    directory: str | None
    columns: tuple[str, str, str]


SECTIONS = (
    Section("Trees", "trees", ("File", "Problem", "Technique")),
    Section("Strings", "strings", ("File", "Problem", "Technique")),
    Section("Stacks", "stacks", ("File", "Problem", "Technique")),
    Section("Linked Lists", "linked-list", ("File", "Problem", "Technique")),
    Section("Concurrency", "concurrency", ("File", "Problem", "Technique")),
    Section("Data Structures", "data-structures", ("File", "Content", "Operations")),
    Section("Dynamic Programming", "dynamic-programming", ("File", "Problem", "Approach")),
    Section("Other", None, ("File", "Problem", "Technique")),
)


ROW_PATTERN = re.compile(r"^\| `(?P<file>[^`]+)` \| (?P<middle>.*?) \| (?P<last>.*?) \|$")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Update leetcode/README.md contents tables.")
    parser.add_argument(
        "--staged",
        action="store_true",
        help="Use files staged in Git's index. This is intended for pre-commit hooks.",
    )
    return parser.parse_args()


def staged_files() -> set[str]:
    result = subprocess.run(
        ["git", "-C", str(REPO_ROOT), "ls-files", "--cached", "leetcode"],
        check=True,
        capture_output=True,
        text=True,
    )

    return {
        path.removeprefix("leetcode/")
        for path in result.stdout.splitlines()
        if path.startswith("leetcode/")
    }


def working_tree_files() -> set[str]:
    return {
        str(path.relative_to(LEETCODE_DIR))
        for path in LEETCODE_DIR.rglob("*")
        if path.is_file()
    }


def managed_files(use_staged: bool) -> list[str]:
    files = staged_files() if use_staged else working_tree_files()

    return sorted(
        path
        for path in files
        if Path(path).suffix in MANAGED_SUFFIXES and path not in EXCLUDED_PATHS
    )


def existing_metadata(readme: str) -> dict[str, tuple[str, str]]:
    metadata: dict[str, tuple[str, str]] = {}

    for line in readme.splitlines():
        match = ROW_PATTERN.match(line)
        if match:
            metadata[match.group("file")] = (match.group("middle"), match.group("last"))

    return metadata


def title_from_slug(slug: str) -> str:
    return " ".join(word.upper() if word in {"bst", "lru"} else word.capitalize() for word in slug.split("-"))


def infer_problem(file_name: str) -> str:
    stem = Path(file_name).stem
    normalized = stem.replace("_", "-")
    match = re.match(r"^(?P<number>\d+)-(?P<slug>.+)$", normalized)

    if match:
        number = match.group("number")
        slug = match.group("slug")
        title = title_from_slug(slug)
        return f"[{number}. {title}](https://leetcode.com/problems/{slug}/)"

    return title_from_slug(normalized)


def section_files(section: Section, files: list[str]) -> list[str]:
    if section.directory is None:
        return [path for path in files if "/" not in path]

    prefix = f"{section.directory}/"
    return [path.removeprefix(prefix) for path in files if path.startswith(prefix) and "/" not in path.removeprefix(prefix)]


def render_section(section: Section, files: list[str], metadata: dict[str, tuple[str, str]]) -> str:
    if not files:
        return ""

    columns = section.columns
    lines = [
        f"### {section.title}" + (f" (`{section.directory}/`)" if section.directory else ""),
        "",
        f"| {columns[0]} | {columns[1]} | {columns[2]} |",
        "|------|---------|-----------|",
    ]

    for file_name in files:
        middle, last = metadata.get(file_name, (infer_problem(file_name), "TBD"))
        lines.append(f"| `{file_name}` | {middle} | {last} |")

    return "\n".join(lines)


def render_contents(files: list[str], metadata: dict[str, tuple[str, str]]) -> str:
    sections = []

    for section in SECTIONS:
        current_files = section_files(section, files)
        rendered = render_section(section, current_files, metadata)
        if rendered:
            sections.append(rendered)

    return "\n\n".join(sections)


def update_readme(use_staged: bool) -> None:
    readme = README_PATH.read_text()
    metadata = existing_metadata(readme)
    contents = render_contents(managed_files(use_staged), metadata)
    start_marker = "## Contents\n\n"
    end_marker = "\n## Topics Covered"

    if start_marker not in readme or end_marker not in readme:
        raise SystemExit("Could not find README contents markers.")

    before, rest = readme.split(start_marker, 1)
    _, after = rest.split(end_marker, 1)

    README_PATH.write_text(f"{before}{start_marker}{contents}\n{end_marker}{after}")


if __name__ == "__main__":
    update_readme(parse_args().staged)
