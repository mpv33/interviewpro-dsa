// https://leetcode.com/problems/binary-search/description/
// Amazon ✯   Apple ✯   Google ✯   Microsoft ✯   Bloomberg ✯   Adobe   Facebook   Uber   Yahoo

// time o(logn) space(n)
function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;  // Target found, return the index
        } else if (nums[mid] < target) {
            left = mid + 1;  // Move to the right half
        } else {
            right = mid - 1;  // Move to the left half
        }
    }

    return -1;  // Target not found
}

// Example usage:
let nums1 = [-1, 0, 3, 5, 9, 12];
let target1 = 9;
console.log(binarySearch(nums1, target1));  // Output: 4

let nums2 = [-1, 0, 3, 5, 9, 12];
let target2 = 2;
console.log(binarySearch(nums2, target2));  // Output: -1
