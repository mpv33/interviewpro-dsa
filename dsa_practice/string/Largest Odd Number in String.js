// https://leetcode.com/problems/largest-odd-number-in-string/description/
//  Amazon ✯   Adobe ✯

var largestOddNumber = function(num) {
    // Iterate from the last digit to the first
    for (let i = num.length - 1; i >= 0; i--) {
        // Check if the digit is odd
        if (num[i] % 2 !== 0) {
            // Return the substring from start to this digit
            return num.slice(0, i + 1);
        }
    }
    // If no odd digit is found, return an empty string
    return "";
};
