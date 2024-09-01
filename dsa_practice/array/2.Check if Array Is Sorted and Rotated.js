// https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/
//  Amazon 

function checkIfSortedAndRotated(nums) {
    let count = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] > nums[(i + 1) % n]) {
            count++;
        }
        // If there are more than one break points, return false
        if (count > 1) {
            return false;
        }
    }

    return true;
}
function checkIfSortedAndRotated(nums) {
    let count = 0;
    let len = nums.length - 1;
    for (let i = 0; i < len; i++) {
        if (nums[i] > nums[i + 1]) {
            count++;
        }
    }
    if (count > 1 || (count == 1 && nums[0] < nums[len])) {
        return false;
    }
    return true;
};

// Test cases
console.log(checkIfSortedAndRotated([3, 4, 5, 1, 2])); // Output: true
console.log(checkIfSortedAndRotated([2, 1, 3, 4]));    // Output: false
console.log(checkIfSortedAndRotated([1, 2, 3]));       // Output: true
