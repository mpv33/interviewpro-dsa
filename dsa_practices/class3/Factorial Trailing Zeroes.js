// Q: https://leetcode.com/problems/factorial-trailing-zeroes/description/
// tag :Amazon ✯   Oracle ✯

// time log(n) space o(1)
function trailingZeroes(n) {
    let count = 0;
    while (n >= 5) {
        n = Math.floor(n / 5);
        count += n;
    }
    return count;
}

console.log(trailingZeroes(3));  // Output: 0
console.log(trailingZeroes(5));  // Output: 1
console.log(trailingZeroes(0));  // Output: 0
