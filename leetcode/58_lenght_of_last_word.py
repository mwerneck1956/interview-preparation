class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        i = len(s) - 1
        lastWordLength = 0
        
        while(i >= 0):
            if(s[i] != ' '):
                while(s[i] != ' ' and i >= 0):
                    lastWordLength += 1
                    i = i - 1
                return lastWordLength
            i = i - 1
            
        return lastWordLength
              
                
s = "d"

solution = Solution()
print(solution.lengthOfLastWord(s)) 