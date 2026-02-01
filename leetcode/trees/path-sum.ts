/**
 * LeetCode 112 - Path Sum
 * https://leetcode.com/problems/path-sum/
 *
 * Check if tree has a root-to-leaf path with given sum.
 *
 * Time: O(N) - visits each node once
 * Space: O(H) - recursion stack
 */

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false;

    const remaining = targetSum - root.val;

    // Leaf node - check if remaining sum is zero
    if (!root.left && !root.right) {
        return remaining === 0;
    }

    return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining);
}

// Test: Tree [5,4,8,11,null,13,4,7,2,null,null,null,1], target = 22
const tree = new TreeNode(5,
    new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
    new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
);
console.log(hasPathSum(tree, 22));  // true (path: 5->4->11->2)
