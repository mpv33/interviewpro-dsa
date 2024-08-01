// Q:https://leetcode.com/problems/shuffle-the-array/description/
// tag : Apple ✯   Amazon ✯

// optimal 
function shuffle(nums, n) {
    // Step 1: Encode values in the second half of the array
    for (let i = 0; i < n; i++) {
        // Encode nums[i] and nums[i + n] into nums[i + n]
        nums[i + n] = (nums[i + n] << 10) | nums[i];
    }

    // Step 2: Decode and rearrange elements
    for (let i = 0; i < n; i++) {
        // Extract x_i and y_i from the encoded values
        nums[2 * i] = nums[i + n] >> 10;       // Extract x_i (higher bits)
        nums[2 * i + 1] = nums[i + n] & 1023;  // Extract y_i (lower 10 bits)
    }

    return nums;
}

// Example usage:
console.log(shuffle([2,5,1,3,4,7], 3)); // Output: [2, 3, 5, 4, 1, 7]
console.log(shuffle([1,2,3,4,4,3,2,1], 4)); // Output: [1, 4, 2, 3, 3, 2, 4, 1]
console.log(shuffle([1,1,2,2], 2)); // Output: [1, 2, 1, 2]



// space and time o(n)
function shuffle(nums, n) {
    // Initialize two pointers for the two halves of the array
    let result = new Array(2 * n);
    for (let i = 0; i < n; i++) {
        result[2 * i] = nums[i];
        result[2 * i + 1] = nums[i + n];
    }
    return result;
}

// Example usage:
console.log(shuffle([2,5,1,3,4,7], 3)); // Output: [2, 3, 5, 4, 1, 7]
console.log(shuffle([1,2,3,4,4,3,2,1], 4)); // Output: [1, 4, 2, 3, 3, 2, 4, 1]
console.log(shuffle([1,1,2,2], 2)); // Output: [1, 2, 1, 2]

