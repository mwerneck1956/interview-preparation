# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
        
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        mergedHead = ListNode(0)
        current = mergedHead
        
        currentA, currentB = list1, list2
  
        while(currentA and currentB):
            if(currentA.val > currentB.val):
                current.next = currentB
                currentB = currentB.next
            else:
                current.next = currentA
                currentA = currentA.next
        
            current = current.next
        
        current.next = currentA or currentB
        
        return mergedHead.next
                
        
        
listA = ListNode(1, ListNode(2, ListNode(4)))
# listB = ListNode(1,ListNode(3, ListNode(4)))
listB = ListNode(-5)

solution = Solution()


def print_values(head : ListNode):
    curr = head
    
    while(curr):
        print(curr.val)
        curr = curr.next
        
print_values(solution.mergeTwoLists(listA, listB))