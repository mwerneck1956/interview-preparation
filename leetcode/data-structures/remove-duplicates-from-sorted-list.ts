class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const testList = new ListNode(1, new ListNode(1, new ListNode(2)));

console.log(deleteDuplicates(testList));

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const seen = new Set();

  let current = head;
  let prev = null;

  while (current) {
    if (seen.has(current.val)) {
      prev.next = current.next;
    } else {
      prev = current;
      seen.add(current.val);
    }
    
    current = current.next;
  }

  return head;
}
