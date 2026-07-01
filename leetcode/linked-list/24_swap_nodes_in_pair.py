# Given a linked list, swap every two adjacent nodes and return its head. 
# You must solve the problem without modifying the values in the list's nodes 
# (i.e., only nodes themselves may be changed.)

from linked_list import print_linked_list
from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if(head and head.next):  
            start = head
            end = head.next
        
            while(start and end):
                aux = start.val
                start.val = end.val
                end.val = aux
                
                start = end.next
                end = start.next if start is not None else None
        return head

simple_list = ListNode(10, ListNode(20 , ListNode(30 , ListNode(40))))
solution = Solution()

# print_linked_list(solution.swapPairs(simple_list))
print_linked_list(solution.swapPairs(simple_list))

