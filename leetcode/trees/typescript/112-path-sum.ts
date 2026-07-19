/**
 * LeetCode 112 - Path Sum
 * https://leetcode.com/problems/path-sum/
 *
 * Check if tree has a root-to-leaf path with given sum.
 *
 * Time: O(N) - visits each node once
 * Space: O(H) - recursion stack
 */

import { isMainModule, TreeNode } from "./tree-node.js";

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false;

    const remaining = targetSum - root.val;

    // Leaf node - check if remaining sum is zero
    if (!root.left && !root.right) {
        return remaining === 0;
    }

    return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining);
}

if (isMainModule(import.meta.url)) {
    const tree = new TreeNode(
        5,
        new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
        new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1))),
    );
    console.log(hasPathSum(tree, 22)); // true (path: 5 -> 4 -> 11 -> 2)
}
