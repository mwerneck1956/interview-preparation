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
| `average-of-levels.ts` | [637. Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/) | BFS |
| `invert-tree.ts` | [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) | DFS Recursion |
| `level-order-traversal.ts` | [102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) | BFS/DFS |
| `max-depth.ts` | [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | DFS Recursion |
| `path-sum.ts` | [112. Path Sum](https://leetcode.com/problems/path-sum/) | DFS Recursion |
| `same-tree.ts` | [100. Same Tree](https://leetcode.com/problems/same-tree/) | DFS Recursion |

### Strings (`strings/`)

| File | Problem | Technique |
|------|---------|-----------|
| `longest-substring-without-repeating.ts` | [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Sliding Window |

### Stacks (`stacks/`)

| File | Problem | Technique |
|------|---------|-----------|
| `valid-parentheses.ts` | [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | Stack |

### Linked Lists (`linked-list/`)

| File | Problem | Technique |
|------|---------|-----------|
| `203-remove-linked-list-elements.ts` | [203. Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/) | TBD |
| `203_remove_linked_list_element.py` | [203. Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/) | Iteration, Previous Pointer |
| `21_merge_two_sorted_lists.py` | [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) | Iteration, Dummy Node |
| `24_swap_nodes_in_pair.py` | [24. Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/) | Two Pointers |
| `linked_list.py` | Linked List helpers | Traversal, Append, Prepend |

### Concurrency (`concurrency/`)

| File | Problem | Technique |
|------|---------|-----------|
| `1114-print-in-order.py` | [1114. Print In Order](https://leetcode.com/problems/print-in-order/) | TBD |
| `threads.py` | Threads | TBD |

### Data Structures (`data-structures/`)

| File | Content | Operations |
|------|---------|-----------|
| `double-linked-list.ts` | Double Linked List | TBD |
| `list.ts` | Linked List implementation | insert, revert, mergeSorted, removeElements, removeNth |
| `max-depth-559.ts` | [559. Maximum Depth of N-ary Tree](https://leetcode.com/problems/maximum-depth-of-n-ary-tree/) | Tree Traversal |
| `remove-duplicates-from-sorted-list.ts` | Remove Duplicates From Sorted List | TBD |
| `sorted-array-to-bst.ts` | [108. Convert Sorted Array to BST](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/) | Recursion, BST |

### Dynamic Programming (`dynamic-programming/`)

| File | Problem | Approach |
|------|---------|-----------|
| `338-counting-bits.ts` | [338. Counting Bits](https://leetcode.com/problems/counting-bits/) | TBD |
| `70-climbing-stairs.ts` | [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) | TBD |
| `fib.ts` | Fibonacci Sequence | Recursion, Memoization |

### Other

| File | Problem | Technique |
|------|---------|-----------|
| `binary-search.ts` | Binary Search | Binary Search |
| `is-alien-sorted.ts` | [953. Verifying an Alien Dictionary](https://leetcode.com/problems/verifying-an-alien-dictionary/) | Hash Map |
| `lru-cache.ts` | LRU Cache | TBD |
| `median-sorted-array.ts` | Median Sorted Array | TBD |
| `reverse-integer.py` | Reverse Integer | TBD |

## Topics Covered

- **Trees**: BFS, DFS, traversal algorithms
- **Strings**: Sliding window, two pointers
- **Stacks**: Bracket matching, expression evaluation
- **Linked Lists**: Reversal, merge, removal
- **Dynamic Programming**: Memoization, tabulation
- **Hash Maps**: Frequency counting, lookups
