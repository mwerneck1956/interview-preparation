# LeetCode Problems

Algorithm and data structure problems for coding interview preparation.

## How to Run

```bash
# From the root directory
npm run leetcode <file-path>

# Examples
npm run leetcode leetcode/trees/max-depth.ts
npm run leetcode leetcode/strings/longest-substring-without-repeating.ts
```

## Contents

### Trees (`trees/`)

| File | Problem | Technique |
|------|---------|-----------|
| `max-depth.ts` | [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | DFS Recursion |
| `same-tree.ts` | [100. Same Tree](https://leetcode.com/problems/same-tree/) | DFS Recursion |
| `invert-tree.ts` | [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) | DFS Recursion |
| `path-sum.ts` | [112. Path Sum](https://leetcode.com/problems/path-sum/) | DFS Recursion |
| `level-order-traversal.ts` | [102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) | BFS/DFS |
| `average-of-levels.ts` | [637. Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/) | BFS |

### Strings (`strings/`)

| File | Problem | Technique |
|------|---------|-----------|
| `longest-substring-without-repeating.ts` | [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Sliding Window |

### Stacks (`stacks/`)

| File | Problem | Technique |
|------|---------|-----------|
| `valid-parentheses.ts` | [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | Stack |

### Data Structures (`data-structures/`)

| File | Content | Operations |
|------|---------|------------|
| `list.ts` | Linked List implementation | insert, revert, mergeSorted, removeElements, removeNth |
| `max-depth-559.ts` | [559. Maximum Depth of N-ary Tree](https://leetcode.com/problems/maximum-depth-of-n-ary-tree/) | Tree Traversal |
| `sorted-array-to-bst.ts` | [108. Convert Sorted Array to BST](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/) | Recursion, BST |

### Dynamic Programming (`dynamic-programming/`)

| File | Problem | Approach |
|------|---------|----------|
| `fib.ts` | Fibonacci Sequence | Recursion, Memoization |

### Other

| File | Problem | Technique |
|------|---------|-----------|
| `binary-search.ts` | Binary Search | Binary Search |
| `is-alien-sorted.ts` | [953. Verifying an Alien Dictionary](https://leetcode.com/problems/verifying-an-alien-dictionary/) | Hash Map |

## Topics Covered

- **Trees**: BFS, DFS, traversal algorithms
- **Strings**: Sliding window, two pointers
- **Stacks**: Bracket matching, expression evaluation
- **Linked Lists**: Reversal, merge, removal
- **Dynamic Programming**: Memoization, tabulation
- **Hash Maps**: Frequency counting, lookups
