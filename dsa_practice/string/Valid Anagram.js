// https://leetcode.com/problems/valid-anagram/description/
// Facebook ✯   Bloomberg ✯   Amazon ✯   Spotify ✯   Microsoft ✯   Goldman Sachs   Affirm   Google   Apple 

var isAnagram = function(s, t) {
    // If the lengths are different, they can't be anagrams
    if (s.length !== t.length) return false;

    // Create a frequency map for characters in s
    const count = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    // Decrease the count for characters in t
    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }

    return true;
};
