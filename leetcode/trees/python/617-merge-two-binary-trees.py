"""LeetCode 617 - Merge Two Binary Trees."""

from binary_tree import TreeNode, print_tree


class Solution:
    def mergeTrees(
        self,
        root1: TreeNode | None,
        root2: TreeNode | None,
    ) -> TreeNode | None:
        if root1 is None:
            return root2
        if root2 is None:
            return root1

        return TreeNode(
            root1.val + root2.val,
            left=self.mergeTrees(root1.left, root2.left),
            right=self.mergeTrees(root1.right, root2.right),
        )


if __name__ == "__main__":
    first_tree = TreeNode(
        1,
        TreeNode(3, TreeNode(5)),
        TreeNode(2),
    )
    second_tree = TreeNode(
        2,
        TreeNode(1, None, TreeNode(4)),
        TreeNode(3, None, TreeNode(7)),
    )
    print_tree(Solution().mergeTrees(first_tree, second_tree))
