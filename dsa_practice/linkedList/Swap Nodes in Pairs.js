// Q : https://leetcode.com/problems/swap-nodes-in-pairs/description/
// tag :Facebook ✯   Amazon ✯   Microsoft ✯   Bloomberg ✯   Adobe ✯   Apple

function swapPairs(head) {
    if (!head || !head.next) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    while (head && head.next) {
        // Nodes to be swapped
        let first = head;
        let second = head.next;

        // Swapping nodes
        prev.next = second;
        first.next = second.next;
        second.next = first;

        // Moving to the next pair
        prev = first;
        head = first.next;
    }

    return dummy.next;
}
