// Q:https://leetcode.com/problems/majority-element/description/
// tag :Amazon ✯   Microsoft ✯   Adobe ✯   Apple ✯   Google ✯   Bloomberg   Facebook   Uber   Rubrik

function majorityElement(nums) {
    // time o(nlogn) space o(1)
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
}



function majorityElement(nums) {
      // time o(n) space o(n)
    const countMap = {};
    const majorityCount = Math.floor(nums.length / 2);

    for (const num of nums) {
        countMap[num] = (countMap[num] || 0) + 1;
        if (countMap[num] > majorityCount) {
            return num;
        }
    }
    // Since we are guaranteed a majority element, we will always return from the loop.
}
function majorityElement(nums) {
      // time o(n) space o(1)
    let candidate = null;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } else if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
}

// Example usage:
console.log(majorityElement([3,2,3])); // Output: 3
console.log(majorityElement([2,2,1,1,1,2,2])); // Output: 2

