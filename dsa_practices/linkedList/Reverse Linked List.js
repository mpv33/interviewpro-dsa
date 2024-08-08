// Q: https://leetcode.com/problems/reverse-linked-list/description/
// tag :Amazon ✯   Microsoft ✯   Apple ✯   Bloomberg ✯   Facebook ✯   Google   Yandex   Intuit   Nvidia

function reverseList(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let nextNode = current.next;  // Store the next node
        current.next = prev;          // Reverse the current node's pointer
        prev = current;               // Move prev to the current node
        current = nextNode;           // Move to the next node in the original list
    }

    return prev;  // prev will be the new head of the reversed list
}

// Example usage:

// Create a linked list [1, 2, 3, 4, 5]
let head1 = createLinkedList([1, 2, 3, 4, 5]);
let reversedList1 = reverseList(head1);
console.log(linkedListToArray(reversedList1)); // Output: [5, 4, 3, 2, 1]

// Create a linked list [1, 2]
let head2 = createLinkedList([1, 2]);
let reversedList2 = reverseList(head2);
console.log(linkedListToArray(reversedList2)); // Output: [2, 1]

// Create an empty linked list
let head3 = createLinkedList([]);
let reversedList3 = reverseList(head3);
console.log(linkedListToArray(reversedList3)); // Output: []
