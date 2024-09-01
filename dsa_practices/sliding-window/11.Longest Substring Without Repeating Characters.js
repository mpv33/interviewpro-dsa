// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
//  Amazon ✯   Microsoft ✯   Facebook ✯   Bloomberg ✯   Apple ✯   Google   Spotify   Adobe   Uber   VMware   Yahoo   Goldman Sachs   Oracle   Walmart Global Tech   Salesforce   Paypal   Samsung   Intuit   Yandex   Zoho   JPMorgan
function lengthOfLongestSubstring(s) {
    let charIndexMap = new Map();
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        // If the character is already in the map and its index is within the current window
        if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
            start = charIndexMap.get(char) + 1;
        }

        // Update the last seen index of the character
        charIndexMap.set(char, end);

        // Calculate the maximum length
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3
