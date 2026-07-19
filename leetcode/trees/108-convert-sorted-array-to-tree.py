from tree import print_tree


# Definition for a binary tree node.
from typing import List, Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        

class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        self.nums = nums
        return self._sortedArrayToBST( 0, len(nums))
        
    def _sortedArrayToBST(self, left, right) -> Optional[TreeNode]:
        if(left >= right):
            return None
        
        mid = (left + right) // 2 
        
        root = TreeNode(self.nums[mid])
        
        root.left = self._sortedArrayToBST(left, mid)
        root.right = self._sortedArrayToBST(mid  + 1 , right)
            
            
        return root
        
            

class IterativeSolution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        self.nums = nums
        return self._sortedArrayToBST( 0, len(nums))
        
    def _sortedArrayToBST(self, left, right) -> Optional[TreeNode]:
        if(left >= right):
            return None
        
        mid = (left + right) // 2 
        
        root = TreeNode(self.nums[mid])
        
        root.left = self._sortedArrayToBST(left, mid)
        root.right = self._sortedArrayToBST(mid  + 1 , right)
            
            
        return root
        
        
        

nums = [-10,-3,0,5,9]

solution = Solution()
print_tree(solution.sortedArrayToBST(nums))