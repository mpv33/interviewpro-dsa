// Q: https://leetcode.com/problems/next-permutation/description/
// tag :  Facebook ✯   Amazon ✯   Microsoft ✯   Adobe ✯   Apple ✯   JPMorgan and Chase   LinkedIn   Bloomberg   TikTok   Google   Yahoo   Uber   DoorDash   Rubrik   Walmart Labs   DE Shaw   ByteDance   Goldman Sachs   Grab   Zoho

function nextPermutation(nums) {
    let i = nums.length - 2;

    // Find the first decreasing element from the end
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        // Find the next larger element
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        // Swap the elements
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Reverse the elements to the right
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

// Example usage
let nums1 = [1, 2, 3];
nextPermutation(nums1);
console.log(nums1); // Output: [1, 3, 2]

let nums2 = [3, 2, 1];
nextPermutation(nums2);
console.log(nums2); // Output: [1, 2, 3]

let nums3 = [1, 1, 5];
nextPermutation(nums3);
console.log(nums3); // Output: [1, 5, 1]
