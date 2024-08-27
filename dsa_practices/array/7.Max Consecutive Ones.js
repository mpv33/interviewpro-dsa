// https://leetcode.com/problems/max-consecutive-ones/description/
//  Google ✯   Apple ✯


 var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0;       // Initialize maxCount to track the maximum number of consecutive 1s
    let currentCount = 0;   // Initialize currentCount to track the current streak of 1s
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentCount++;  // Increment currentCount if the current element is 1
            maxCount = Math.max(maxCount, currentCount);  // Update maxCount if currentCount is larger
        } else {
            currentCount = 0;  // Reset currentCount to 0 if the current element is 0
        }
    }
    
    return maxCount;  // Return the maximum number of consecutive 1s found
};
