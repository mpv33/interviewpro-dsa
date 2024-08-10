// Q:https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/
// tag : Adobe ✯   Amazon ✯

function deleteMiddle(head) {
    if (!head || !head.next) return null; // Handle the case where the list has only one node

    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = slow.next; // Skip the middle node
    return head;
}
