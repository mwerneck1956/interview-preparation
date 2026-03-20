class ListNode<T> {
  prev: ListNode<T> | null;
  next: ListNode<T> | null;
  value: T;

  constructor(value: T, prev: ListNode<T> | null, next: ListNode<T> | null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoubleLinkedList<T> {
  private head: ListNode<T> | null = null;
  private tail: ListNode<T> | null = null;

  constructor(head: ListNode<T> | null) {
    this.head = head;
    this.tail = head;
  }

  insertAtHead(value: T) {
    const newNode = new ListNode(value, null, this.head);

    if (this.head) {
      this.head.prev = newNode;
    } else {
      this.tail = newNode;
    }

    this.head = newNode;
  }

  insert(value: T) {
    const newNode = new ListNode(value, null, null);

    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
      return;
    }

    if (this.tail) {
      this.tail.next = newNode;
    }

    newNode.prev = this.tail;
    this.tail = newNode;
  }

  printValues() {
    let iterator = this.head;

    while (iterator) {
      console.log(iterator.value, "->");
      iterator = iterator.next;
    }
  }
}

const list = new DoubleLinkedList(new ListNode(10, null, null));

list.insertAtHead(20);
list.insertAtHead(30);
list.insertAtHead(40);

// list.insert(20);
// list.insert(55);
// list.insert(80);

list.printValues();
