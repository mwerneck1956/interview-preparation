"""LeetCode 108 - Convert Sorted Array to Binary Search Tree."""

from binary_tree import TreeNode, print_tree


class Solution:
    def sortedArrayToBST(self, nums: list[int]) -> TreeNode | None:
        return self._build_subtree(nums, 0, len(nums))

    def _build_subtree(
        self,
        nums: list[int],
        left: int,
        right: int,
    ) -> TreeNode | None:
        if left >= right:
            return None

        middle = (left + right) // 2
        return TreeNode(
            nums[middle],
            left=self._build_subtree(nums, left, middle),
            right=self._build_subtree(nums, middle + 1, right),
        )


if __name__ == "__main__":
    print_tree(Solution().sortedArrayToBST([-10, -3, 0, 5, 9]))
