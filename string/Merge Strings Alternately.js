// Q:https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75
// level:easy
// company:[Uber]
// topics:['Two Pointers','String']

// time:O(max(N, M))
// space:O(N + M)
function mergeAlternately(word1, word2) {
    let mergedString = '';
    let i = 0, j = 0;

    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            mergedString += word1[i];
            i++;
        }

        if (j < word2.length) {
            mergedString += word2[j];
            j++;
        }
    }

    return mergedString;
}

// Example usage:
const example1 = mergeAlternately("abc", "pqr");
const example2 = mergeAlternately("ab", "pqrs");
const example3 = mergeAlternately("abcd", "pq");

console.log("Example 1:", example1); // Output: "apbqcr"
console.log("Example 2:", example2); // Output: "apbqrs"
console.log("Example 3:", example3); // Output: "apbqcd"
