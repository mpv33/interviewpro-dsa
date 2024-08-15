// https://leetcode.com/problems/sort-characters-by-frequency/description/
//  Microsoft ✯   Facebook ✯   Amazon ✯   Bloomberg ✯   Apple ✯

var frequencySort = function(s) {
    // Step 1: Count the frequency of each character
    const freqMap = {};
    for (let char of s) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }

    // Step 2: Sort characters based on frequency
    const sortedChars = Object.keys(freqMap).sort((a, b) => freqMap[b] - freqMap[a]);

    // Step 3: Build the result string
    let result = '';
    for (let char of sortedChars) {
        result += char.repeat(freqMap[char]);
    }

    return result;
};
