// https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/description/
// Amazon ✯   Facebook ✯

 var maximumSubarraySum = function(nums, k) {
    let map = new Map();
    let sum = 0;
    let maxSum = 0;

    for (let i = 0; i < nums.length; i++) {
        // Add the current element to the window
        sum += nums[i];
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);

        // If the window size exceeds k, shrink it from the left
        if (i >= k) {
            let leftElement = nums[i - k];
            sum -= leftElement;
            if (map.get(leftElement) === 1) {
                map.delete(leftElement);
            } else {
                map.set(leftElement, map.get(leftElement) - 1);
            }
        }

        // Check if the window size is exactly k and all elements are distinct
        if (map.size === k) {
            maxSum = Math.max(maxSum, sum);
        }
    }

    return maxSum;
};

// Example Usage
console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3));  // Output: 15
console.log(maximumSubarraySum([4, 4, 4], 3));              // Output: 0
