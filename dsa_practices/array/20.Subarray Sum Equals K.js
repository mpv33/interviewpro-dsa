// https://leetcode.com/problems/subarray-sum-equals-k/description/
//  Facebook ✯   Amazon ✯   Google ✯   Microsoft ✯   Oracle ✯   tiktok   Bloomberg   Visa   Apple   Quora   Adobe   Expedia   Nvidia   ServiceNow   DoorDash   Bolt

function subarraySumBruteForce(nums, k) {
    const n = nums.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += nums[j];
            if (sum === k) {
                count++;
            }
        }
    }

    return count;
}

function countSubarraysWithSum(nums, k) {
    const map = new Map();
    map.set(0,1)
    let sum = 0, count = 0;
    for (const num of nums) {
        sum += num;
        count += map.get(sum - k) || 0;
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
}
// Example usage
const nums1 = [1, 1, 1];
const k1 = 2;
console.log(countSubarraysWithSum(nums1, k1)); // Output: 2

const nums2 = [1, 2, 3];
const k2 = 3;
console.log(countSubarraysWithSum(nums2, k2)); // Output: 2


