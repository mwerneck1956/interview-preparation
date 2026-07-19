"""Shared binary-tree types and traversal helpers."""

from __future__ import annotations

from collections import deque
from dataclasses import dataclass


@dataclass
class TreeNode:
    val: int = 0
    left: TreeNode | None = None
    right: TreeNode | None = None


def preorder_values(root: TreeNode | None) -> list[int]:
    """Return the node values in root-left-right order."""
    if root is None:
        return []

    values: list[int] = []
    stack = [root]

    while stack:
        node = stack.pop()
        values.append(node.val)

        if node.right is not None:
            stack.append(node.right)
        if node.left is not None:
            stack.append(node.left)

    return values


def level_order_values(root: TreeNode | None) -> list[int]:
    """Return the node values breadth-first."""
    if root is None:
        return []

    values: list[int] = []
    queue = deque([root])

    while queue:
        node = queue.popleft()
        values.append(node.val)

        if node.left is not None:
            queue.append(node.left)
        if node.right is not None:
            queue.append(node.right)

    return values


def print_tree(root: TreeNode | None) -> None:
    """Print one value per line using preorder traversal."""
    for value in preorder_values(root):
        print(value)
