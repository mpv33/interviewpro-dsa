// Q:https://leetcode.com/problems/middle-of-the-linked-list/description/
// tag : Amazon ✯   Adobe ✯   Facebook ✯   Google ✯   Microsoft ✯   Apple   Qualcomm

function middleNode(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

// Helper function to create a linked list node
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

// Example usage:

// Create a linked list [1, 2, 3, 4, 5]
let head1 = createLinkedList([1, 2, 3, 4, 5]);
console.log(middleNode(head1)); // Output: ListNode { val: 3, next: ListNode { val: 4, next: ListNode { val: 5, next: null } } }

// Create a linked list [1, 2, 3, 4, 5, 6]
let head2 = createLinkedList([1, 2, 3, 4, 5, 6]);
console.log(middleNode(head2)); // Output: ListNode { val: 4, next: ListNode { val: 5, next: ListNode { val: 6, next: null } } }
