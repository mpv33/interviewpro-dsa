// Q:https://leetcode.com/problems/first-missing-positive/description/
// tag : Amazon ✯   Microsoft ✯   Adobe ✯   Google ✯   Facebook ✯   Databricks   Grab   Walmart Global Tech

function firstMissingPositive(nums) {
    const n = nums.length;
  
    // Step 1: Place each number in its correct position if possible
    for (let i = 0; i < n; i++) {
      while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
        const correctIndex = nums[i] - 1;
        [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
      }
    }
  
    // Step 2: Identify the first index where nums[i] is not i + 1
    for (let i = 0; i < n; i++) {
      if (nums[i] !== i + 1) {
        return i + 1;
      }
    }
  
    // If all elements are in their correct positions, return n + 1
    return n + 1;
  }
  
// space o(n)

  function firstMissingPositive(nums) {
    const numSet = new Set(nums);
  
    let missingPositive = 1;
  
    // Find the smallest positive integer not in the set
    while (numSet.has(missingPositive)) {
      missingPositive++;
    }
  
    return missingPositive;
  }
  
  // Examples
  console.log(firstMissingPositive([1, 2, 0])); // Output: 3
  console.log(firstMissingPositive([3, 4, -1, 1])); // Output: 2
  console.log(firstMissingPositive([7, 8, 9, 11, 12])); // Output: 1
  