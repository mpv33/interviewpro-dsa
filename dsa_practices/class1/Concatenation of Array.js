// Q: https://leetcode.com/problems/concatenation-of-array/description/
// tag : Google ✯   Adobe ✯  

function getConcatenation(nums) {
    const n = nums.length;

    // Step 1: Copy elements from the second half to the end
    for (let i = 0; i < n; i++) {
        nums[i + n] = nums[i];
    }

    // Step 2: Return the array as the concatenation of itself
    return nums;
}

// Example usage:
console.log(getConcatenation([1, 2, 1])); // Output: [1, 2, 1, 1, 2, 1]
console.log(getConcatenation([1, 3, 2, 1])); // Output: [1, 3, 2, 1, 1, 3, 2, 1]
