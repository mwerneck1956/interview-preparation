/**
 * LeetCode 637 - Average of Levels in Binary Tree
 * https://leetcode.com/problems/average-of-levels-in-binary-tree/
 *
 * BFS approach - process level by level using a queue.
 *
 * Time: O(N) - visits each node once
 * Space: O(W) - queue holds at most one level, W = max width
 */

import { isMainModule, TreeNode } from "./tree-node.js";

export function averageOfLevels(root: TreeNode | null): number[] {
    if (!root) return [];

    const result: number[] = [];
    let currentLevel = [root];

    while (currentLevel.length > 0) {
        const nextLevel: TreeNode[] = [];
        let sum = 0;

        for (const node of currentLevel) {
            sum += node.val;

            if (node.left) nextLevel.push(node.left);
            if (node.right) nextLevel.push(node.right);
        }

        result.push(sum / currentLevel.length);
        currentLevel = nextLevel;
    }

    return result;
}

if (isMainModule(import.meta.url)) {
    const tree = new TreeNode(
        3,
        new TreeNode(9),
        new TreeNode(20, new TreeNode(15), new TreeNode(7)),
    );
    console.log(averageOfLevels(tree)); // [3, 14.5, 11]
}
