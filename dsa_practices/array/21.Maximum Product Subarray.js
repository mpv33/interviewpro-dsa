// https://leetcode.com/problems/maximum-product-subarray/description/
//  LinkedIn ✯   Amazon ✯   Microsoft ✯   Bloomberg ✯   Infosys ✯   Google   Adobe

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    let maxProduct = nums[0];
    let minProduct = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let current = nums[i];
        if (current < 0) [maxProduct, minProduct] = [minProduct, maxProduct];

        maxProduct = Math.max(current, maxProduct * current);
        minProduct = Math.min(current, minProduct * current);

        result = Math.max(result, maxProduct);
    }

    return result;
};
