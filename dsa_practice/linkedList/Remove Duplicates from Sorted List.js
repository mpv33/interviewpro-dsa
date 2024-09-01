// Q:https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
// tag :Amazon ✯   Facebook ✯   Bloomberg ✯   Adobe ✯   Microsoft ✯

function deleteDuplicates(head) {
    let current = head;

    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next; // Skip the duplicate node
        } else {
            current = current.next; // Move to the next node
        }
    }

    return head;
}

// Helper function to create a linked list node
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Example usage:

// Example 1: [1, 1, 2]
let head1 = new ListNode(1);
head1.next = new ListNode(1);
head1.next.next = new ListNode(2);

console.log(deleteDuplicates(head1));  // Output: [1, 2]

// Example 2: [1, 1, 2, 3, 3]
let head2 = new ListNode(1);
head2.next = new ListNode(1);
head2.next.next = new ListNode(2);
head2.next.next.next = new ListNode(3);
head2.next.next.next.next = new ListNode(3);

console.log(deleteDuplicates(head2));  // Output: [1, 2, 3]
