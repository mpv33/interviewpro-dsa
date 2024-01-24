// Q: https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75
// level:easy
// company:[ 'Goldman Sachs','Atlassian']
// topic:['Math','String']

function gcdOfStrings(str1, str2) {
    // Base case: If the concatenation is not equal, no common divisor exists
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    // Recursive case: Find the GCD of lengths and return the substring
    const gcdLength = gcd(str1.length, str2.length);
    return str1.substring(0, gcdLength);
}

// Helper function to calculate the greatest common divisor using recursion
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

// Example usage:
const example1 = gcdOfStrings("ABCABC", "ABC");
const example2 = gcdOfStrings("ABABAB", "ABAB");
const example3 = gcdOfStrings("LEET", "CODE");

console.log("Example 1:", example1); // Output: "ABC"
console.log("Example 2:", example2); // Output: "AB"
console.log("Example 3:", example3); // Output: ""
