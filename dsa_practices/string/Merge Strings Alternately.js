// Q:https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75
// Tag-uber

function mergeAlternately(word1, word2) {
    const merged = [];
    const maxLength = Math.max(word1.length, word2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < word1.length) {
            merged.push(word1[i]);
        }
        if (i < word2.length) {
            merged.push(word2[i]);
        }
    }

    return merged.join('');
}

// Example usage:
let word1 = "abc";
let word2 = "pqr";
console.log(mergeAlternately(word1, word2));  // Output: "apbqcr"

word1 = "ab";
word2 = "pqrs";
console.log(mergeAlternately(word1, word2));  // Output: "apbqrs"
