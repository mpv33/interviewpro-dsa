// Q:https://leetcode.com/problems/maximum-subarray/description/
// tag :LinkedIn ✯   Amazon ✯   Apple ✯   Microsoft ✯   Adobe ✯   Google   Facebook   Cisco   JPMorgan   Shopee   Bloomberg   Uber   VMware   Oracle   Salesforce   ByteDance   Docusign   Samsung   Goldman Sachs   ServiceNow   Walmart Global Tech   PayTM   Infosys

function maxSubArray(nums) {
    if (nums.length === 0) return 0; // Handle edge case if array is empty

    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Either extend the current subarray or start a new one with the current element
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        // Update maxSum if the current subarray sum is greater
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Example usage
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
console.log(maxSubArray([1]));                            // Output: 1
console.log(maxSubArray([5, 4, -1, 7, 8]));               // Output: 23
