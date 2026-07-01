class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        

class LinkedList:
    def __init__(self, head : ListNode):
        self.head = head
    
    def append(self, val: int):
        current = self.head
        
        while(current.next is not None):
            current = current.next
        
        current.next = ListNode(val)
        
    def search(self, searched) -> int:
        current = self.head
    
        while(current.next):
            if(current.val == searched):
                return 
        
    def prepend(self, val: int):
        self.head = ListNode(val, self.head)
        
    def printValues(self):
        current = self.head
        
        while(current):
            print(current.val)
            current = current.next


def print_linked_list(head : ListNode):
    current = head
    
    while(current):
        print(current.val)
        current = current.next

# list = LinkedList(ListNode(10))
# list.prepend(5)
# list.prepend(-5)
# list.append(25)
# list.printValues()