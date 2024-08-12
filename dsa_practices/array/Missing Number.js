//https://leetcode.com/problems/missing-number/description/
// Microsoft ✯   Amazon ✯   Facebook ✯   Adobe ✯   Apple ✯   Salesforce   VMware   Nvidia



 var missingNumber = function(nums) {
    let n = nums.length;
    let totalSum = (n * (n + 1)) / 2;
    let actualSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        actualSum += nums[i];
    }
    
    return totalSum - actualSum;
};



 var missingNumber = function(nums) {
    let n = nums.length;
    let xor = 0;
    
    // XOR all numbers in the array and all numbers from 0 to n
    for (let i = 0; i < n; i++) {
        xor ^= nums[i];
        xor ^= i;
    }
    
    // XOR with n because we stopped at n-1 in the loop
    xor ^= n;
    
    return xor;
};
