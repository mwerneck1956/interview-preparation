/**
 * LeetCode 102 - Binary Tree Level Order Traversal
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 *
 * Returns nodes grouped by level using DFS approach.
 *
 * Time: O(N) - visits each node once
 * Space: O(N) - stores all nodes in result
 */

import { isMainModule, TreeNode } from "./tree-node.js";

export function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];

    const result: number[][] = [[root.val]];

    function traverse(depth: number, node: TreeNode | null): void {
        if (!node) return;

        if (result[depth]) {
            result[depth].push(node.val);
        } else {
            result[depth] = [node.val];
        }

        traverse(depth + 1, node.left);
        traverse(depth + 1, node.right);
    }

    traverse(1, root.left);
    traverse(1, root.right);

    return result;
}

if (isMainModule(import.meta.url)) {
    const tree = new TreeNode(
        3,
        new TreeNode(9),
        new TreeNode(20, new TreeNode(15), new TreeNode(7)),
    );
    console.log(levelOrder(tree)); // [[3], [9, 20], [15, 7]]
}
