// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// Amazon ✯   Bloomberg ✯   ByteDance ✯   Facebook ✯   Google ✯   Microsoft   Oracle   Uber 
//  LinkedIn   Goldman Sachs   Adobe   Wipro   Amadeus Software   Ion Trading   Verifone 
//  VMWare   Airtel   Qualys   Apptad Inc.


 var searchRange = function(nums, target) {
    const findBound = (findFirst) => {
        let left = 0, right = nums.length - 1, bound = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                bound = mid;
                findFirst ? right = mid - 1 : left = mid + 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return bound;
    };

    const firstPos = findBound(true);
    return [firstPos, firstPos === -1 ? -1 : findBound(false)];
};

// Example usage:
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // Output: [-1, -1]
console.log(searchRange([], 0)); // Output: [-1, -1]

