/**
 * LeetCode 104 - Maximum Depth of Binary Tree
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 *
 * Time: O(N) - visits each node once
 * Space: O(H) - recursion stack, H = height of tree
 */

import { isMainModule, TreeNode } from "./tree-node.js";

export function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

if (isMainModule(import.meta.url)) {
    const tree = new TreeNode(
        3,
        new TreeNode(9),
        new TreeNode(20, new TreeNode(15), new TreeNode(7)),
    );
    console.log(maxDepth(tree)); // 3
}
