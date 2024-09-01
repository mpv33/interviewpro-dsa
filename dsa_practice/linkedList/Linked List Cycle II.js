// Q:https://leetcode.com/problems/linked-list-cycle-ii/description/
// tag :Amazon ✯   Microsoft ✯

function detectCycle(head) {
    if (!head || !head.next) return null;

    let slow = head;
    let fast = head;

    // Step 1: Detect cycle using Floyd's Tortoise and Hare
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            // Step 2: Find the start of the cycle
            let pointer1 = head;
            let pointer2 = slow;

            while (pointer1 !== pointer2) {
                pointer1 = pointer1.next;
                pointer2 = pointer2.next;
            }

            return pointer1; // The node where the cycle begins
        }
    }

    return null; // No cycle detected
}

// Helper function to create a linked list node
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Example usage:

// Example 1: [3, 2, 0, -4], pos = 1
let head1 = new ListNode(3);
head1.next = new ListNode(2);
head1.next.next = new ListNode(0);
head1.next.next.next = new ListNode(-4);
head1.next.next.next.next = head1.next; // Creating cycle

console.log(detectCycle(head1));  // Output: Node with value 2

// Example 2: [1, 2], pos = 0
let head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = head2; // Creating cycle

console.log(detectCycle(head2));  // Output: Node with value 1

// Example 3: [1], pos = -1
let head3 = new ListNode(1);

console.log(detectCycle(head3));  // Output: null
