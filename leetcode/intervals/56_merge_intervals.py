from typing import List

class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        firstPair = intervals[0]
        secondPair = intervals[1]
        
        if(firstPair[1] >= secondPair[0] and secondPair[1] > firstPair[0]):
            return [firstPair[0] , secondPair[1]]
        
        for index,_ in enumerate()
            
        



intervals = [[1,4],[4,5]]

solution = Solution()

print(solution.merge(intervals))