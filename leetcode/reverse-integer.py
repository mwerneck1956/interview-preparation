class Solution:
    def reverse(self, x: int) -> int:
        isNegative = x < 0
        x = abs(x)
        
        result = 0
        while x > 0:
            result = result * 10 + (x % 10)
            x //= 10
            
        return -result if isNegative else result
        
            
    
solution = Solution()
print(solution.reverse(-123))


# 321 
## 321 -> 321