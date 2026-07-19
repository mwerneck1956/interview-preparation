/**
 * Binary Tree Node Definition
 *
 * Standard TreeNode class used across tree problems.
 */
import { pathToFileURL } from "node:url";

export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

export function isMainModule(importMetaUrl: string): boolean {
    const entrypoint = process.argv[1];
    return entrypoint !== undefined && importMetaUrl === pathToFileURL(entrypoint).href;
}
