/**
 * LeetCode 226 - Invert Binary Tree
 * https://leetcode.com/problems/invert-binary-tree/
 *
 * Time: O(N) - visits each node once
 * Space: O(H) - recursion stack
 */

import { isMainModule, TreeNode } from "./tree-node.js";

export function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    const temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);

    return root;
}

if (isMainModule(import.meta.url)) {
    const tree = new TreeNode(
        4,
        new TreeNode(2, new TreeNode(1), new TreeNode(3)),
        new TreeNode(7, new TreeNode(6), new TreeNode(9)),
    );
    console.log("Inverted tree root:", invertTree(tree)?.val); // 4
}
