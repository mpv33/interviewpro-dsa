// Q :https://leetcode.com/problems/reverse-nodes-in-k-group/description/
// tag : Amazon ✯   Microsoft ✯   Capital One ✯   Facebook ✯   Google ✯   Bloomberg   Yahoo   ByteDance   Zoom

function reverseKGroup(head, k) {
    if (!head || k === 1) return head;
    
    let dummy = new ListNode(0);
    dummy.next = head;
    let current = dummy, next, prev = dummy;
    let count = 0;
    
    // Count the number of nodes in the list
    while (current.next) {
        current = current.next;
        count++;
    }
    
    // Reverse in groups
    while (count >= k) {
        current = prev.next;
        next = current.next;
        for (let i = 1; i < k; i++) {
            current.next = next.next;
            next.next = prev.next;
            prev.next = next;
            next = current.next;
        }
        prev = current;
        count -= k;
    }
    
    return dummy.next;
}
