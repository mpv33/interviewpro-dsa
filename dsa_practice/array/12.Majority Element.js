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
    let candidate1 = null, candidate2 = null;
    let count1 = 0, count2 = 0;

    // Step 1: Find potential candidates
    for (let num of nums) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }

    // Step 2: Validate candidates
    count1 = 0;
    count2 = 0;
    for (let num of nums) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        }
    }

    const result = [];
    const threshold = Math.floor(nums.length / 3);

    if (count1 > threshold) result.push(candidate1);
    if (count2 > threshold) result.push(candidate2);

    return result;
}

// Example usage
console.log(majorityElement([3, 2, 3])); // Output: [3]
console.log(majorityElement([1])); // Output: [1]
console.log(majorityElement([1, 2])); // Output: [1, 2]



