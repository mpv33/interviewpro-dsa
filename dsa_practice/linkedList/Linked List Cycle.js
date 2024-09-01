// Q:https://leetcode.com/problems/linked-list-cycle/description/
// tag : Amazon ✯   Paytm ✯   VMWare ✯   Accolite ✯   OYO ✯   Samsung   Snapdeal   DE Shaw   Hike   MakeMyTrip   Walmart   MAQ Software   Adobe   SAP Labs   Qualcomm   Veritas   Mahindra Comviva   Lybrate   TCS   Deutsche Bank   Spotify   Microsoft   Oracle   Visa   Google   Goldman Sachs   Wells Fargo

function hasCycle(head) {
    if (!head || !head.next) {
        return false;
    }

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}

// Helper function to create a linked list node
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Example usage:

// Create a linked list with a cycle
let head = new ListNode(3);
let second = new ListNode(2);
let third = new ListNode(0);
let fourth = new ListNode(-4);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = second; // Creating a cycle

console.log(hasCycle(head)); // Output: true

// Create a linked list without a cycle
let head2 = new ListNode(1);
let second2 = new ListNode(2);

head2.next = second2;

console.log(hasCycle(head2)); // Output: false
