// Q: https://leetcode.com/problems/greatest-common-divisor-of-strings/description/
// Tag : Goldman Sachs , Atlassian 

function gcdOfStrings(str1, str2) {
    // Helper function to calculate the GCD of two numbers
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    // Check if concatenating str1 + str2 equals str2 + str1
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    // Calculate the GCD of the lengths of the two strings
    const gcdLength = gcd(str1.length, str2.length);

    // Return the substring from the start of str1 up to gcdLength
    return str1.substring(0, gcdLength);
}

// Example usage:
let str1 = "ABCABC";
let str2 = "ABC";
console.log(gcdOfStrings(str1, str2));  // Output: "ABC"

str1 = "ABABAB";
str2 = "ABAB";
console.log(gcdOfStrings(str1, str2));  // Output: "AB"

str1 = "LEET";
str2 = "CODE";
console.log(gcdOfStrings(str1, str2));  // Output: ""
