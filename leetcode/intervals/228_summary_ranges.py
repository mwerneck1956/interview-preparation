from typing import List

class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        if len(nums) == 0:
            return []
        
        ranges = []
        
        interval_start = nums[0]
        previous = nums[0]
        
        for num in nums[1:]:
            if num != previous + 1:
                if interval_start != previous:
                    ranges.append(f"{interval_start}->{previous}")
                else:
                    ranges.append(f"{interval_start}")
                
                interval_start = num
            
            previous = num
        
        if interval_start != previous:
            ranges.append(f"{interval_start}->{previous}")
        else:
            ranges.append(f"{interval_start}")
        
        return ranges