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
| `203-remove-linked-list-elements.ts` | [203. Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/) | Dummy Node, Previous Pointer |
| `203_remove_linked_list_element.py` | [203. Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/) | Iteration, Previous Pointer |
| `21_merge_two_sorted_lists.py` | [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) | Iteration, Dummy Node |
| `24_swap_nodes_in_pair.py` | [24. Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/) | Two Pointers, Value Swap |
| `linked_list.py` | Linked List helpers | Traversal, Append, Prepend |

### Concurrency (`concurrency/`)

| File | Problem | Technique |
|------|---------|-----------|
| `1114-print-in-order.py` | [1114. Print In Order](https://leetcode.com/problems/print-in-order/) | Threading Events |
| `threads.py` | Threads | Thread Start/Join |

### Data Structures (`data-structures/`)

| File | Content | Operations |
|------|---------|-----------|
| `double-linked-list.ts` | Double Linked List | Node Links, Insert/Remove Stubs |
| `list.ts` | Linked List implementation | insert, revert, mergeSorted, removeElements, removeNth |
| `max-depth-559.ts` | [559. Maximum Depth of N-ary Tree](https://leetcode.com/problems/maximum-depth-of-n-ary-tree/) | Iterative DFS |
| `remove-duplicates-from-sorted-list.ts` | [83. Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/) | Set, Previous Pointer |
| `sorted-array-to-bst.ts` | [108. Convert Sorted Array to BST](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/) | Recursion, BST |

### Dynamic Programming (`dynamic-programming/`)

| File | Problem | Approach |
|------|---------|-----------|
| `338-counting-bits.ts` | [338. Counting Bits](https://leetcode.com/problems/counting-bits/) | Bitwise DP |
| `70-climbing-stairs.ts` | [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) | Recursion, Memoization |
| `fib.ts` | Fibonacci Sequence | Recursion, Memoization |

### Other

| File | Problem | Technique |
|------|---------|-----------|
| `205_isomorphic_strings.py` | [205. Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/) | Bidirectional Hash Maps |
| `58_lenght_of_last_word.py` | [58. Length of Last Word](https://leetcode.com/problems/length-of-last-word/) | Reverse Scan |
| `binary-search.ts` | Binary Search | Binary Search |
| `is-alien-sorted.ts` | [953. Verifying an Alien Dictionary](https://leetcode.com/problems/verifying-an-alien-dictionary/) | Hash Map |
| `lru-cache.ts` | [146. LRU Cache](https://leetcode.com/problems/lru-cache/) | Map, Frequency Tracking |
| `median-sorted-array.ts` | [4. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/) | Merge Two Sorted Arrays |
| `reverse-integer.py` | [7. Reverse Integer](https://leetcode.com/problems/reverse-integer/) | Digit Extraction |

## Topics Covered

- **Trees**: BFS, DFS, traversal algorithms
- **Strings**: Sliding window, two pointers
- **Stacks**: Bracket matching, expression evaluation
- **Linked Lists**: Reversal, merge, removal
- **Intervals**: Range merging, range summarization
- **Dynamic Programming**: Memoization, tabulation
- **Hash Maps**: Frequency counting, lookups
- **Concurrency**: Thread coordination and lifecycle
