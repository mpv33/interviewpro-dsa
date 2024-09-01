// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
//  Amazon ✯   Facebook ✯   Microsoft ✯   Adobe ✯   Goldman Sachs ✯   Uber   Oracle

 // time o(logn)
 var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        // Compare middle element with the rightmost element
        if (nums[mid] > nums[right]) {
            // Minimum element is in the right part
            left = mid + 1;
        } else {
            // Minimum element is in the left part or is mid itself
            right = mid;
        }
    }

    // At the end of the loop, left == right and points to the minimum element
    return nums[left];
};

// Example usage:
console.log(findMin([3, 4, 5, 1, 2])); // Output: 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // Output: 0
console.log(findMin([11, 13, 15, 17])); // Output: 11
