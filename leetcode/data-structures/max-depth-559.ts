class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


// Solution using iterative solution with dfs

function maxDepth(root: TreeNode | null): number {
    if(!root)
        return 0

    const stack : Array<{node : TreeNode, depth:  number}> = [{node : root, depth: 1}]

    let max = 0;

    while(stack.length){
        const {node, depth} = stack.pop();

        max = Math.max(max, depth)

        if(node.left)
            stack.push({depth : depth + 1, node : node.left})
        if(node.right)
            stack.push({depth : depth + 1, node : node.right})

    }

    return max;
}


console.log(maxDepth(new TreeNode(10, new TreeNode(20, new TreeNode(20)))))