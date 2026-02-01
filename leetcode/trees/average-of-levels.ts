/**
 * LeetCode 637 - Average of Levels in Binary Tree
 * https://leetcode.com/problems/average-of-levels-in-binary-tree/
 *
 * BFS approach - process level by level using a queue.
 *
 * Time: O(N) - visits each node once
 * Space: O(W) - queue holds at most one level, W = max width
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

function averageOfLevels(root: TreeNode | null): number[] {
    if (!root) return [];

    const result: number[] = [];
    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        let sum = 0;

        // Process all nodes at current level
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;
            sum += node.val;

            // Add children to queue for next level
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(sum / levelSize);
    }

    return result;
}

// Test
const tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(averageOfLevels(tree));  // [3, 14.5, 11]
