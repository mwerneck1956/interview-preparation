# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        current = head
        previous = None
        
        while current:
            if current.val == val:
                if previous is None:
                    head = current.next
                else:
                    previous.next = current.next
                
                current = current.next
            else:
                previous = current
                current = current.next
        
        return head
        
                
            
        
listA = ListNode(1, ListNode(2, ListNode(4, ListNode(2, ListNode(20)))))
# listB = ListNode(7,ListNode(7, ListNode(7, ListNode(7))))

solution = Solution()


def print_values(head : ListNode):
    curr = head
    
    while(curr):
        print(curr.val)
        curr = curr.next
        
print_values(solution.removeElements(listA, 2))