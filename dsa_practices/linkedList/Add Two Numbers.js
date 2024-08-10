// Q :https://leetcode.com/problems/add-two-numbers/description/
// tag : Amazon ✯   Apple ✯   Facebook ✯   Microsoft ✯   Bloomberg ✯   Google   Adobe   Yahoo   Oracle   Uber   JPMorgan   SAP   Capital One   Visa   Huawei

function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
}
