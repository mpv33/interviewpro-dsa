// https://leetcode.com/problems/sum-of-beauty-of-all-substrings/description/
// Google

function beautySum(s) {
    let totalBeauty = 0;

    for (let i = 0; i < s.length; i++) {
        let freq = {}; // Frequency map

        for (let j = i; j < s.length; j++) {
            // Update frequency for the current character
            freq[s[j]] = (freq[s[j]] || 0) + 1;

            // Determine the max and min frequencies in the current substring
            let maxFreq = 0;
            let minFreq = Infinity;

            for (let key in freq) {
                maxFreq = Math.max(maxFreq, freq[key]);
                minFreq = Math.min(minFreq, freq[key]);
            }

            // Calculate the beauty and add to the total
            totalBeauty += maxFreq - minFreq;
        }
    }

    return totalBeauty;
}

// Example usage:
console.log(beautySum("aabcb")); // Output: 5
console.log(beautySum("aabcbaa")); // Output: 17
