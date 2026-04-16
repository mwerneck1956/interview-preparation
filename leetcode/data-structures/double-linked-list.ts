class DoubleLinkedListNode {
    value: number;
    next: DoubleLinkedListNode | null;
    prev: DoubleLinkedListNode | null;

    constructor(value: number, next: DoubleLinkedListNode | null = null, prev: DoubleLinkedListNode | null = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }   
}



class DoubleLinkedList {
    head : DoubleLinkedListNode | null;

    constructor(head : DoubleLinkedListNode | null){
        this.head = head ?? null;
    }

    insert(){}

    remove(){}

}

//
