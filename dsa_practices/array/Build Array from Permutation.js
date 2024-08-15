// Q:https://leetcode.com/problems/build-array-from-permutation/description/
// tag :Apple ✯   Adobe ✯   Uber ✯   Google 

function buildArray(nums) {
    const n = nums.length;
    const ans = new Array(n); // Create an array of the same length

    for (let i = 0; i < n; i++) {
        ans[i] = nums[nums[i]]; // Build the array based on the permutation
    }

    return ans;
}

// Example usage:
console.log(buildArray([0, 2, 1, 5, 3, 4])); // Output: [0, 1, 2, 4, 5, 3]
console.log(buildArray([5, 0, 1, 2, 3, 4])); // Output: [4, 5, 0, 1, 2, 3]


// space o(1)

function buildArray(nums) {
    const n = nums.length;

    // Step 1: Encode values into nums
    for (let i = 0; i < n; i++) {
        // Encode nums[i] with nums[nums[i]]
        nums[i] += (nums[nums[i]] % n) * n;
    }

    // Step 2: Decode values
    for (let i = 0; i < n; i++) {
        nums[i] = Math.floor(nums[i] / n);
    }

    return nums;
}

// Example usage:
console.log(buildArray([0, 2, 1, 5, 3, 4])); // Output: [0, 1, 2, 4, 5, 3]
console.log(buildArray([5, 0, 1, 2, 3, 4])); // Output: [4, 5, 0, 1, 2, 3]
