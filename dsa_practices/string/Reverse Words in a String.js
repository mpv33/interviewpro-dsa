// Q: https://leetcode.com/problems/reverse-words-in-a-string/description/
// tag : Microsoft , Apple ,LinkedIn , Amazon ,Google ,Visa


 var reverseWords = function(s) {
    // Step 1: Trim leading and trailing spaces
    s = s.trim();
    
    // Step 2: Split the string into words, handling multiple spaces
    const words = s.split(/\s+/);
    
    // Step 3: Build the reversed string
    let result = '';
    for (let i = words.length - 1; i >= 0; i--) {
        if (result) {
            result += ' '; // Add space only if result is not empty
        }
        result += words[i];
    }
    
    return result;
};

// Example usage:
console.log(reverseWords("the sky is blue"));    // Output: "blue is sky the"
console.log(reverseWords("  hello world  "));    // Output: "world hello"
console.log(reverseWords("a good   example"));   // Output: "example good a"



// space o(1)

 var reverseWords = function(s) {
    // Step 1: Trim leading and trailing spaces
    s = s.trim();
    
    // Convert the string to an array for in-place manipulation
    const chars = Array.from(s);
    
    // Helper function to reverse a portion of the array
    function reverse(arr, start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

    // Step 2: Reverse the entire string
    reverse(chars, 0, chars.length - 1);

    // Step 3: Reverse each word in the reversed string
    let start = 0;
    for (let end = 0; end <= chars.length; end++) {
        if (end === chars.length || chars[end] === ' ') {
            reverse(chars, start, end - 1);
            start = end + 1;
        }
    }

    // Step 4: Build the final result with a single space between words
    let result = [];
    let prevWasSpace = false;

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] !== ' ') {
            if (prevWasSpace && result.length > 0) {
                result.push(' ');
            }
            result.push(chars[i]);
            prevWasSpace = false;
        } else {
            prevWasSpace = true;
        }
    }

    return result.join('');
};

// Example usage:
console.log(reverseWords("the sky is blue"));    // Output: "blue is sky the"
console.log(reverseWords("  hello world  "));    // Output: "world hello"
console.log(reverseWords("a good   example"));   // Output: "example good a"
