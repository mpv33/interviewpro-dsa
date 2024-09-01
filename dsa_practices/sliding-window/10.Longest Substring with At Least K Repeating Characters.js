// https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/description/
//  Amazon ✯   Microsoft ✯

// time o(n) space(1)
function longestSubstring(s, k) {
    let maxLen = 0;

    for (let uniqueTarget = 1; uniqueTarget <= 26; uniqueTarget++) {
        let freqMap = {}, start = 0, uniqueCount = 0, atLeastKCount = 0;

        for (let end = 0; end < s.length; end++) {
            let endChar = s[end];
            freqMap[endChar] = (freqMap[endChar] || 0) + 1;
            if (freqMap[endChar] === 1) uniqueCount++;
            if (freqMap[endChar] === k) atLeastKCount++;

            while (uniqueCount > uniqueTarget) {
                let startChar = s[start];
                if (freqMap[startChar] === k) atLeastKCount--;
                freqMap[startChar]--;
                if (freqMap[startChar] === 0) uniqueCount--;
                start++;
            }

            if (uniqueCount === uniqueTarget && uniqueCount === atLeastKCount) {
                maxLen = Math.max(maxLen, end - start + 1);
            }
        }
    }

    return maxLen;
}

// Example usage:
console.log(longestSubstring("aaabb", 3)); // Output: 3
console.log(longestSubstring("ababbc", 2)); // Output: 5
