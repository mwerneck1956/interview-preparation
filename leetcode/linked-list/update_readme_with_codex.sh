#!/bin/sh
set -eu

repo_root=$(git rev-parse --show-toplevel)
mode="working tree"

if [ "${1:-}" = "--staged" ]; then
  mode="staged Git index"
elif [ "${1:-}" != "" ]; then
  echo "Usage: $0 [--staged]" >&2
  exit 2
fi

codex exec \
  --cd "$repo_root" \
  --sandbox workspace-write \
  --ephemeral \
  --color never \
  "Update README.md and leetcode/README.md using the $mode.

Rules:
- Modify only README.md and leetcode/README.md.
- Keep the existing README style and section structure.
- README.md should reflect the repository structure and quick links.
- leetcode/README.md should reflect current LeetCode problem files.
- Preserve useful existing metadata such as techniques and problem links when it is already present.
- Use TBD only when a technique or description cannot be inferred confidently.
- Do not commit changes.
- Do not modify Git hooks, source files, generated files, or dependency files."
