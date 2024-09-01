//https://leetcode.com/problems/rotate-array/description/
// Amazon ✯   Microsoft ✯   Google ✯   Facebook ✯   Yahoo ✯   tcs   Salesforce

//Time Complexity: O(n * k),
var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n; // Handle cases where k is greater than the array length
    
    for (let i = 0; i < k; i++) {
        let temp = nums[n - 1];
        for (let j = n - 1; j > 0; j--) {
            nums[j] = nums[j - 1];
        }
        nums[0] = temp;
    }
};




//Time Complexity: O(n) due to the three reverse operations.
//Space Complexity: O(1) as it performs the operation in place without additional space
var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n; // Handle cases where k is greater than the array length
    
    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
};

function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}