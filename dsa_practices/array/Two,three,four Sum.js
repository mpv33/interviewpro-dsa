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


// https://leetcode.com/problems/3sum/
// Amazon ✯   Facebook ✯   Microsoft ✯   Apple ✯   Adobe ✯   Google   Walmart Global Tech   Bloomberg   Uber   Qualtrics   Yahoo   Goldman Sachs   tiktok   Salesforce   VMware   ByteDance   Morgan Stanley   Cisco   Oracle   Tesla   American Express   Infosys
 // time o(n*2)
 var threeSum = function(nums) {
    nums.sort((a, b) => a - b);  // Step 1: Sort the array
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;  // Skip duplicates for the first element

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;  // Skip duplicates for the second element
                while (left < right && nums[right] === nums[right - 1]) right--;  // Skip duplicates for the third element
                left++;
                right--;
            } else if (sum < 0) {
                left++;  // Move left pointer to the right
            } else {
                right--;  // Move right pointer to the left
            }
        }
    }

    return result;
};


// https://leetcode.com/problems/4sum/description/
//  Amazon ✯   Facebook ✯   Apple ✯   Microsoft ✯   Adobe ✯   Google   Yahoo   Infosys   LinkedIn 

 // time o(n*3)
 var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);  // Step 1: Sort the array
    const result = [];
    const n = nums.length;

    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;  // Skip duplicates for the first number

        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;  // Skip duplicates for the second number

            let left = j + 1;
            let right = n - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++;  // Skip duplicates for the third number
                    while (left < right && nums[right] === nums[right - 1]) right--;  // Skip duplicates for the fourth number
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;  // Move left pointer to increase the sum
                } else {
                    right--;  // Move right pointer to decrease the sum
                }
            }
        }
    }

    return result;
};

