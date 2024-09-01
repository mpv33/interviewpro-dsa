// https://www.geeksforgeeks.org/problems/count-occurences-of-anagrams5839/1
// Flipkart Amazon Microsoft Intuit

// time o(m+n) space o(1)

 // Helper function to check if two frequency maps match
 function isAnagram(patCount, windowCount) {
    if (patCount.size !== windowCount.size) return false;
    for (const [key, value] of patCount) {
        if (windowCount.get(key) !== value) return false;
    }
    return true;
}

function search(pat, txt) {
    const M = pat.length, N = txt.length;
    if (M > N) return 0;

    const patCount = new Map();
    const windowCount = new Map();

    // Initialize patCount
    for (const char of pat) {
        patCount.set(char, (patCount.get(char) || 0) + 1);
    }

    let count = 0;

    // Initialize the first window and compare with patCount
    for (let i = 0; i < N; i++) {
        // Add new character to the window
        const addChar = txt[i];
        windowCount.set(addChar, (windowCount.get(addChar) || 0) + 1);

        // Remove old character from the window if the window size exceeds M
        if (i >= M) {
            const removeChar = txt[i - M];
            if (windowCount.get(removeChar) === 1) {
                windowCount.delete(removeChar);
            } else {
                windowCount.set(removeChar, windowCount.get(removeChar) - 1);
            }
        }

        // Compare only when the window size matches M
        if (i >= M - 1) {
            if (isAnagram(patCount, windowCount)) count++;
        }
    }
    return count;
}

// Example usage:
console.log(search('for', 'forxxorfxdofr')); // Output: 3
console.log(search('aaba', 'aabaabaa')); // Output: 4
