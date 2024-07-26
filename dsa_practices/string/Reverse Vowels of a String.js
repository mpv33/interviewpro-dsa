// Q: https://leetcode.com/problems/reverse-vowels-of-a-string/description/
// tag :Bloomberg

function reverseVowels(s) {
    // Define the vowels
    const vowels = "aeiouAEIOU";
    // Convert the string to an array of characters for in-place modification
    let chars = s.split('');
    let left = 0;
    let right = chars.length - 1;

    while (left < right) {
        // Find the next vowel from the left
        if (!vowels.includes(chars[left])) {
            left++;
            continue;
        }

        // Find the next vowel from the right
        if (!vowels.includes(chars[right])) {
            right--;
            continue;
        }

        // Swap the vowels
        [chars[left], chars[right]] = [chars[right], chars[left]];
        left++;
        right--;
    }

    // Convert the array back to a string
    return chars.join('');
}

// Example usage:
console.log(reverseVowels("hello"));    // Output: "holle"
console.log(reverseVowels("leetcode")); // Output: "leotcede"
