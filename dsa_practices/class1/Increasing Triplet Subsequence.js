// Q:https://leetcode.com/problems/increasing-triplet-subsequence/description/
// tag :Google ,Facebook


 var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;
    
    for (const num of nums) {
        if (num <= first) {
            first = num; // Update first smallest number
        } else if (num <= second) {
            second = num; // Update second smallest number
        } else {
            // num > second means we found a valid triplet
            return true;
        }
    }
    
    return false;
};

// Example usage:
console.log(increasingTriplet([1, 2, 3, 4, 5])); // Output: true
console.log(increasingTriplet([5, 4, 3, 2, 1])); // Output: false
console.log(increasingTriplet([2, 1, 5, 0, 4, 6])); // Output: true
