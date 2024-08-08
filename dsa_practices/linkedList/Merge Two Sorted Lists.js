// Q:https://leetcode.com/problems/merge-two-sorted-lists/description/
// tag :Amazon ✯   Microsoft ✯   Facebook ✯   Adobe ✯   Oracle ✯   Uber   Google   Bloomberg   Shopee   Accenture

function mergeTwoLists(list1, list2) {
    let dummy = new ListNode(-1);  // Dummy node to simplify the merge process
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // If there are remaining nodes in either list, attach them
    if (list1 !== null) {
        current.next = list1;
    } else if (list2 !== null) {
        current.next = list2;
    }

    return dummy.next;  // The merged list starts after the dummy node
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

// Create list1 [1, 2, 4] and list2 [1, 3, 4]
let list1 = createLinkedList([1, 2, 4]);
let list2 = createLinkedList([1, 3, 4]);

let mergedList = mergeTwoLists(list1, list2);
console.log(linkedListToArray(mergedList)); // Output: [1, 1, 2, 3, 4, 4]

// Example with empty lists
let list3 = createLinkedList([]);
let list4 = createLinkedList([]);

let mergedList2 = mergeTwoLists(list3, list4);
console.log(linkedListToArray(mergedList2)); // Output: []

// Example with one empty list
let list5 = createLinkedList([]);
let list6 = createLinkedList([0]);

let mergedList3 = mergeTwoLists(list5, list6);
console.log(linkedListToArray(mergedList3)); // Output: [0]
