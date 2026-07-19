from typing import List

# [1,2,4,5] -> [5]
# t = 7

# [1] < 7
# [5]

class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        start = 0
        end = len(nums) - 1
        best = None
        
        nums.sort()
        
        for num in nums:
           sum = sum 
            
                
        return solution_size
                
        


target = 7


nums = [1,5,3,2]

solution = Solution()
print(solution.minSubArrayLen(7, nums))