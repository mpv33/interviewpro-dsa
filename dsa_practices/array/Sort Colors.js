// https://leetcode.com/problems/sort-colors/description/
//  Microsoft ✯   Amazon ✯   VMware ✯   Adobe ✯   Salesforce ✯   Nvidia   Grab   Uber   Facebook   Intel

function sortColors(nums) {
    let low = 0, mid = 0, high = nums.length - 1;
    
    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];  // Swap the values at low and mid
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;  // Move mid forward
        } else if (nums[mid] === 2) {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];  // Swap the values at mid and high
            high--;  // Move high backward
        }
    }
}

// Example usage:
const nums1 = [2, 0, 2, 1, 1, 0];
sortColors(nums1);
console.log(nums1); // Output: [0, 0, 1, 1, 2, 2]

const nums2 = [2, 0, 1];
sortColors(nums2);
console.log(nums2); // Output: [0, 1, 2]
