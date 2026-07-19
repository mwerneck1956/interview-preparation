class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        if(not s):
            return True

        stack = []
        steps = 0
        
        for symbol in s:
            if(symbol == ')'):
              if(not stack or stack.pop() != '('):
                  steps = steps + 1
            else:
                stack.append(symbol)
        
        return steps + len(stack)
                


s = "()))(("

solution = Solution()

print(solution.minAddToMakeValid(s))

# (()