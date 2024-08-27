// Q:https://leetcode.com/problems/move-zeroes/description/
// tag :Facebook ,Microsoft ,Apple ,Amazon ,Yandex ,Bloomberg ,tcs ,Uber ,Adobe ,IBM ,Expedia ,tiktok

function moveZeroes(nums) {
    let lastNonZeroFoundAt = 0; // Index to place the next non-zero element

    // Traverse the array
    for (let current = 0; current < nums.length; current++) {
        if (nums[current] !== 0) {
            // Swap elements at current and lastNonZeroFoundAt
            [nums[lastNonZeroFoundAt], nums[current]] = [nums[current], nums[lastNonZeroFoundAt]];
            lastNonZeroFoundAt++; // Move to the next position for a non-zero element
        }
    }
}

// Sample input
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]
