// Q: https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
// tag : Facebook ✯   Amazon ✯   Microsoft ✯   Google ✯   Bloomberg ✯   Walmart Global Tech   Apple   Ube

function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0);  // Dummy node to handle edge cases
    dummy.next = head;
    let slow = dummy;
    let fast = dummy;

    // Move fast ahead by n+1 steps to maintain the gap
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // Move both slow and fast until fast reaches the end
    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    // Now slow is just before the node to be removed
    slow.next = slow.next.next;

    return dummy.next;  // Return the head of the modified list
}

// Helper function to create a linked list node
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

// Helper function to convert linked list to an array (for easier result visualization)
function linkedListToArray(head) {
    let array = [];
    while (head !== null) {
        array.push(head.val);
        head = head.next;
    }
    return array;
}

// Example usage:

// Create list [1, 2, 3, 4, 5] and remove 2nd node from the end
let head1 = createLinkedList([1, 2, 3, 4, 5]);
let newList1 = removeNthFromEnd(head1, 2);
console.log(linkedListToArray(newList1)); // Output: [1, 2, 3, 5]

// Create list [1] and remove 1st node from the end
let head2 = createLinkedList([1]);
let newList2 = removeNthFromEnd(head2, 1);
console.log(linkedListToArray(newList2)); // Output: []

// Create list [1, 2] and remove 1st node from the end
let head3 = createLinkedList([1, 2]);
let newList3 = removeNthFromEnd(head3, 1);
console.log(linkedListToArray(newList3)); // Output: [1]
