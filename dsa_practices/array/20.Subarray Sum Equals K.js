// https://leetcode.com/problems/subarray-sum-equals-k/description/
//  Facebook ✯   Amazon ✯   Google ✯   Microsoft ✯   Oracle ✯   tiktok   Bloomberg   Visa   Apple   Quora   Adobe   Expedia   Nvidia   ServiceNow   DoorDash   Bolt

var subarraySum = function(nums, k) {
    let sum = 0;
    let count = 0;
    let map = new Map();
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let rem = sum - k;

        if (map.has(rem)) {
            count += map.get(rem);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
};