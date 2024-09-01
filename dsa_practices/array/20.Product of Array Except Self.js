// Q:https://leetcode.com/problems/product-of-array-except-self/description/
// tag :Amazon,Facebook,Microsoft ,Asana , Apple, Uber, Adobe ,Bloomberg ,Oracle 


 var productExceptSelf = function(nums) {
    const n = nums.length;
    const result = new Array(n);
    
    // Step 1: Calculate prefix products
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }
    
    // Step 2: Calculate suffix products and update result
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }
    
    return result;
};

// Example usage:
console.log(productExceptSelf([1, 2, 3, 4]));    // Output: [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // Output: [0, 0, 9, 0, 0]
