/**
 * LeetCode 100 - Same Tree
 * https://leetcode.com/problems/same-tree/
 *
 * Time: O(N) - visits each node once
 * Space: O(H) - recursion stack
 */

import { isMainModule, TreeNode } from "./tree-node.js";

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // Both nodes exist and have same value - check children
    if (p && q && p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }

    // Both null means we reached the end together - same structure
    if (!p && !q) return true;

    // One is null, other isn't - different structure
    return false;
}

if (isMainModule(import.meta.url)) {
    const firstTree = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const secondTree = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    console.log(isSameTree(firstTree, secondTree)); // true
}
