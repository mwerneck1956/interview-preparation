from tree import print_tree

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        


class Solution:
    def mergeTrees(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> Optional[TreeNode]:
        if(root1 is None):
            return root2
        if(root2 is None):
            return root1
        
        mergedRoot = TreeNode(root1.val + root2.val)
        
        mergedRoot.left = self.mergeTrees(root1.left, root2.left)
        mergedRoot.right = self.mergeTrees(root1.right, root2.right)
        
        return mergedRoot
        
# Do a solution without creating a new Tree
        
        
        
        
root_a = TreeNode(1, TreeNode(3, TreeNode(5)) , 2)
root_b = TreeNode(2)

        
solution = Solution()
