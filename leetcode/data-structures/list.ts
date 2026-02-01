/**
 * Linked List Implementation
 *
 * Common linked list operations frequently asked in coding interviews.
 */

class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number, next: ListNode | null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    head: ListNode | null;

    constructor(head: ListNode | null) {
        this.head = head ?? null;
    }

    /**
     * Insert a new node at the end of the list.
     * Time: O(N) - traverses to the end
     */
    insert(val: number): void {
        if (this.head === null) {
            this.head = new ListNode(val, null);
        } else {
            let current = this.head;

            while (current.next !== null) {
                current = current.next;
            }

            current.next = new ListNode(val, null);
        }
    }

    /**
     * Print all values in the list.
     */
    printValues(): void {
        let current = this.head;

        while (current !== null) {
            console.log(`${current.value} ->`);
            current = current.next;
        }
    }

    /**
     * LeetCode 206 - Reverse Linked List
     * https://leetcode.com/problems/reverse-linked-list/
     *
     * Reverses the list in-place using three pointers.
     *
     * Example: 10 -> 20 -> 30 -> 40 becomes 40 -> 30 -> 20 -> 10
     *
     * Time: O(N) - single pass
     * Space: O(1) - only uses pointers
     */
    revertList(): void {
        let prev: ListNode | null = null;
        let current = this.head;

        while (current) {
            const nextTemp = current.next;  // Save next node
            current.next = prev;            // Reverse the link
            prev = current;                 // Move prev forward
            current = nextTemp;             // Move current forward
        }

        this.head = prev;
    }

    /**
     * LeetCode 21 - Merge Two Sorted Lists
     * https://leetcode.com/problems/merge-two-sorted-lists/
     *
     * Merges this list with another sorted list, maintaining order.
     * Uses dummy node pattern to simplify edge cases.
     *
     * Time: O(N + M) where N and M are the lengths of the lists
     * Space: O(1) - reuses existing nodes
     */
    mergeSorted(listB: LinkedList): ListNode | null {
        const dummy = new ListNode(0, null);
        let current = dummy;

        let pointerA = this.head;
        let pointerB = listB.head;

        // Compare and link smaller node
        while (pointerA !== null && pointerB !== null) {
            if (pointerA.value > pointerB.value) {
                current.next = pointerB;
                pointerB = pointerB.next;
            } else {
                current.next = pointerA;
                pointerA = pointerA.next;
            }
            current = current.next;
        }

        // Attach remaining nodes (one list might be longer)
        current.next = pointerA ?? pointerB;

        return dummy.next;
    }

    /**
     * LeetCode 203 - Remove Linked List Elements
     * https://leetcode.com/problems/remove-linked-list-elements/
     *
     * Removes all nodes with the given value.
     * Uses dummy node to handle head removal case.
     *
     * Time: O(N) - single pass
     * Space: O(1)
     */
    removeElements(val: number): void {
        const dummy = new ListNode(0, this.head);
        let prev = dummy;

        while (prev.next) {
            const current = prev.next;

            if (current.value === val) {
                // Skip the node by linking prev to current's next
                prev.next = current.next ?? null;
            } else {
                prev = current;
            }
        }

        this.head = dummy.next;
    }

    /**
     * LeetCode 19 - Remove Nth Node From End of List
     * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
     *
     * Removes the node at the given index (0-based from start).
     *
     * Time: O(N)
     * Space: O(1)
     */
    removeNth(index: number): void {
        const dummy = new ListNode(0, this.head);
        let prev = dummy;

        // Move to the node before the one to remove
        for (let i = 0; i < index - 1; i++) {
            if (!prev.next) return;
            prev = prev.next;
        }

        // Remove the node by skipping it
        if (prev.next) {
            prev.next = prev.next.next;
        }

        this.head = dummy.next;
    }
}

// Test: Remove all 7s from the list
const list = new LinkedList(null);
list.insert(7);
list.insert(7);
list.insert(7);
list.insert(20);
list.insert(7);

console.log("Before removing 7s:");
list.printValues();

list.removeElements(7);

console.log("\nAfter removing 7s:");
list.printValues();
