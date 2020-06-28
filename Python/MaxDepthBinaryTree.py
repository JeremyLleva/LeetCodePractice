#Given a binary tree, find its maximum depth.
#The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        def helper(node):
            if(not node):   return 0
            l = r = 0
            if(node.left):
                l = max(helper(node.left), 0)
            if(node.right):
                r = max(helper(node.right), 0)
            return 1 + max(l, r)
        return helper(root)