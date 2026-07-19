class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def print_tree(node : TreeNode):
    _print_tree(node)
    
def _print_tree(node : TreeNode):
    if(node):
        print(node.val)
        _print_tree(node.left)
        _print_tree(node.right)
            

class IterativeTreeOperations():
    def __init__(self, root : TreeNode):
        self.root  = root
    
    def print(self):
        queue = []
        queue.append(self.root)
        
        while(queue):
            current = queue.pop()
            print(current.val)
            
            if(current.left):
                queue.insert(0, current.left)
            if(current.right):
                queue.insert(0, current.right)
            


exampleTree = TreeNode(10 , TreeNode(20, TreeNode(30)) , TreeNode(15, TreeNode(13) , TreeNode(15)))

iterativeMethods = IterativeTreeOperations(exampleTree)

iterativeMethods.print()