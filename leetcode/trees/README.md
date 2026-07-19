# Binary Tree Problems

Binary-tree exercises grouped by language. Files follow the
`<leetcode-id>-<problem-slug>.<extension>` naming convention so they stay
ordered and easy to identify.

## Structure

```text
trees/
├── python/
│   ├── 108-convert-sorted-array-to-binary-search-tree.py
│   ├── 617-merge-two-binary-trees.py
│   └── binary_tree.py
└── typescript/
    ├── 100-same-tree.ts
    ├── 102-binary-tree-level-order-traversal.ts
    ├── 104-maximum-depth-of-binary-tree.ts
    ├── 112-path-sum.ts
    ├── 226-invert-binary-tree.ts
    ├── 637-average-of-levels-in-binary-tree.ts
    └── tree-node.ts
```

`binary_tree.py` and `tree-node.ts` contain the shared node definitions and
local helper functions. Each problem file keeps the method name expected by
LeetCode.

## Exercises

| ID | Problem | Language | Approach |
| ---: | --- | --- | --- |
| 100 | [Same Tree](https://leetcode.com/problems/same-tree/) | TypeScript | DFS |
| 102 | [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) | TypeScript | DFS |
| 104 | [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | TypeScript | DFS |
| 108 | [Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/) | Python | Divide and conquer |
| 112 | [Path Sum](https://leetcode.com/problems/path-sum/) | TypeScript | DFS |
| 226 | [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) | TypeScript | DFS |
| 617 | [Merge Two Binary Trees](https://leetcode.com/problems/merge-two-binary-trees/) | Python | DFS |
| 637 | [Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/) | TypeScript | BFS |

## Running an example

From the repository root:

```bash
npm run leetcode leetcode/trees/typescript/104-maximum-depth-of-binary-tree.ts
python3 leetcode/trees/python/108-convert-sorted-array-to-binary-search-tree.py
```

The examples only run when a problem file is used as the entrypoint, so the
solutions can also be imported without producing console output.
