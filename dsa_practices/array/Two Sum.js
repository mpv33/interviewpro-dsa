// Q:https://leetcode.com/problems/two-sum/description/
// tag :Amazon ✯   Adobe ✯   Google ✯   Apple ✯   Microsoft ✯   Facebook   Bloomberg   Uber   Spotify   Goldman Sachs   Expedia   Oracle   Yahoo   Zoho   Visa   Morgan Stanley   IBM   Paypal   JPMorgan   Walmart Global Tech   Intel   Salesforce   Dell   American Express   Accenture   Samsung   Intuit   Zillow   Zoom   Zomato


// time and space o(n)
function twoSumOptimal(nums, target) {
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }

        numMap.set(nums[i], i);
    }

    return [];
}

// time (nlogn) space o(1)
function twoSum(nums, target) {
    const sortedNums = nums
        .map((value, index) => ({ value, index })) // Map values to their original indices
        .sort((a, b) => a.value - b.value); // Sort based on values

    let left = 0;
    let right = sortedNums.length - 1;

    while (left < right) {
        const sum = sortedNums[left].value + sortedNums[right].value;

        if (sum === target) {
            return [sortedNums[left].index, sortedNums[right].index];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}


// time o(n),space o(1)  only for sorted arr
function twoSumTwoPointer(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}
