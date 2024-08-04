// Q:https://leetcode.com/problems/majority-element-ii/description/
// tag : Amazon ✯   Google ✯   Yahoo ✯   Flipkart ✯   Accolite ✯   D-E-Shaw   Nagarro   Atlassian   Apple   Bloomberg   Facebook   Coditas   Microsoft   Zenefits   Genpact   Morgan Stanely   Airtel   Incedo Inc.   Unthinkable Solutions   Tiger Analytics   Betsol   Adobe

function majorityElement(nums) {
    // space o(n)
    const countMap = new Map();
    const n = nums.length;

    // Step 1: Count occurrences of each element
    for (let num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    // Step 2: Find elements with occurrences > n/3
    const result = [];
    for (let [num, count] of countMap.entries()) {
        if (count > Math.floor(n / 3)) {
            result.push(num);
        }
    }

    return result;
}

function majorityElement(nums) {
    // space o(1)
    const result = [];
    const n = nums.length;
    
    if (n === 0) return result;
    if (n === 1) return [nums[0]];

    // Sort the array
    nums.sort((a, b) => a - b);

    // Variables to track current element and its count
    let current = nums[0];
    let count = 1;

    // Traverse the sorted array
    for (let i = 1; i < n; i++) {
        if (nums[i] === current) {
            count++;
        } else {
            if (count > Math.floor(n / 3)) {
                result.push(current);
            }
            // Update current and reset count
            current = nums[i];
            count = 1;
        }
    }

    // Final check for the last element
    if (count > Math.floor(n / 3)) {
        result.push(current);
    }

    return result;
}

// Example usage
console.log(majorityElement([3, 2, 3])); // Output: [3]
console.log(majorityElement([1])); // Output: [1]
console.log(majorityElement([1, 2])); // Output: [1, 2]

