// https://leetcode.com/problems/single-number/description/
//  Amazon ✯   Microsoft ✯   Bloomberg ✯   Google ✯   Adobe ✯   Apple   Facebook   Uber   Atlassian



function singleNumber(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;
}

// Example usage:
console.log(singleNumber([2, 2, 1])); // Output: 1
console.log(singleNumber([4, 1, 2, 1, 2])); // Output: 4
console.log(singleNumber([1])); // Output: 1
