#!/usr/bin/env python3
from __future__ import annotations

import argparse
import re
import subprocess
from dataclasses import dataclass
from pathlib import Path


LEETCODE_DIR = Path(__file__).resolve().parents[1]
REPO_ROOT = LEETCODE_DIR.parent
LEETCODE_README_PATH = LEETCODE_DIR / "README.md"
ROOT_README_PATH = REPO_ROOT / "README.md"

MANAGED_SUFFIXES = {".py", ".ts"}
EXCLUDED_PATHS = {
    "linked-list/update_readme.py",
    "trees/tree-node.ts",
}
ROOT_EXCLUDED_PARTS = {
    ".git",
    ".claude",
    "node_modules",
}
ROOT_EXCLUDED_FILES = {
    ".DS_Store",
    ".gitignore",
    "package-lock.json",
    "order-service.excalidraw",
}

ROOT_DESCRIPTIONS = {
    "architecture": "Software design principles",
    "frontend": "Frontend practice projects",
    "javascript-fundamentals": "Core JavaScript concepts",
    "leetcode": "Algorithm and data structure problems",
    "url-shortener": "URL shortener project",
    "package.json": "Project scripts and dependencies",
    "tsconfig.json": "TypeScript configuration",
}
LEETCODE_DIR_DESCRIPTIONS = {
    "concurrency": "Concurrency problems",
    "data-structures": "Custom implementations",
    "dynamic-programming": "Dynamic programming problems",
    "linked-list": "Linked list problems",
    "stacks": "Stack-based problems",
    "strings": "String manipulation",
    "trees": "Binary tree problems",
}
README_TITLES = {
    "architecture": "Architecture / SOLID",
    "frontend": "Frontend",
    "javascript-fundamentals": "JavaScript Fundamentals",
    "leetcode": "LeetCode Problems",
    "url-shortener": "URL Shortener",
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
    parser = argparse.ArgumentParser(description="Update project README files.")
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


def repo_files(use_staged: bool) -> set[str]:
    command = ["git", "-C", str(REPO_ROOT), "ls-files", "--cached"]
    if not use_staged:
        command.extend(["--others", "--exclude-standard"])

    result = subprocess.run(command, check=True, capture_output=True, text=True)
    return {path for path in result.stdout.splitlines() if is_root_readme_file(path)}


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


def is_root_readme_file(path: str) -> bool:
    parts = Path(path).parts
    if not parts:
        return False

    return not (
        any(part in ROOT_EXCLUDED_PARTS for part in parts)
        or any(part.startswith(".") for part in parts)
        or parts[-1] in ROOT_EXCLUDED_FILES
        or "__pycache__" in parts
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
    readme = LEETCODE_README_PATH.read_text()
    metadata = existing_metadata(readme)
    contents = render_contents(managed_files(use_staged), metadata)
    start_marker = "## Contents\n\n"
    end_marker = "\n## Topics Covered"

    if start_marker not in readme or end_marker not in readme:
        raise SystemExit("Could not find README contents markers.")

    before, rest = readme.split(start_marker, 1)
    _, after = rest.split(end_marker, 1)

    LEETCODE_README_PATH.write_text(f"{before}{start_marker}{contents}\n{end_marker}{after}")


def description_for(path: str) -> str:
    return ROOT_DESCRIPTIONS.get(path, title_from_slug(path))


def format_tree_line(prefix: str, name: str, description: str) -> str:
    label = f"{prefix}{name}"
    return f"{label:<36} # {description}"


def render_root_structure(files: set[str]) -> str:
    top_level_dirs = sorted({Path(path).parts[0] for path in files if len(Path(path).parts) > 1})
    top_level_files = sorted(
        path for path in files if "/" not in path and path in {"package.json", "tsconfig.json"}
    )
    entries = [*top_level_dirs, *top_level_files]
    lines = []

    for index, entry in enumerate(entries):
        is_last = index == len(entries) - 1
        connector = "└── " if is_last else "├── "
        suffix = "/" if entry in top_level_dirs else ""
        lines.append(format_tree_line(connector, f"{entry}{suffix}", description_for(entry)))

        if entry == "leetcode":
            leetcode_dirs = sorted(
                {
                    Path(path).parts[1]
                    for path in files
                    if path.startswith("leetcode/") and len(Path(path).parts) > 2
                }
            )
            child_prefix = "    " if is_last else "│   "
            for child_index, directory in enumerate(leetcode_dirs):
                child_connector = "└── " if child_index == len(leetcode_dirs) - 1 else "├── "
                description = LEETCODE_DIR_DESCRIPTIONS.get(directory, title_from_slug(directory))
                lines.append(format_tree_line(f"{child_prefix}{child_connector}", f"{directory}/", description))

    return "```\n" + "\n".join(lines) + "\n```"


def render_root_quick_links(files: set[str]) -> str:
    readmes = sorted(
        path for path in files if path.endswith("/README.md") and path != "README.md"
    )

    return "\n".join(
        f"- [{README_TITLES.get(Path(path).parent.as_posix(), title_from_slug(Path(path).parent.name))}](./{path})"
        for path in readmes
    )


def update_root_readme(use_staged: bool) -> None:
    readme = ROOT_README_PATH.read_text()
    files = repo_files(use_staged)
    structure = render_root_structure(files)
    quick_links = render_root_quick_links(files)
    structure_start = "## Structure\n\n"
    structure_end = "\n\n## Running Files"
    quick_links_start = "## Quick Links\n\n"

    if structure_start not in readme or structure_end not in readme or quick_links_start not in readme:
        raise SystemExit("Could not find root README markers.")

    before, rest = readme.split(structure_start, 1)
    _, after_structure = rest.split(structure_end, 1)
    readme = f"{before}{structure_start}{structure}{structure_end}{after_structure}"

    before, _ = readme.split(quick_links_start, 1)
    ROOT_README_PATH.write_text(f"{before}{quick_links_start}{quick_links}\n")


if __name__ == "__main__":
    args = parse_args()
    update_readme(args.staged)
    update_root_readme(args.staged)
