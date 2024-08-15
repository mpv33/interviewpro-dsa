// Q: https://leetcode.com/problems/reverse-words-in-a-string/description/
// tag : Microsoft , Apple ,LinkedIn , Amazon ,Google ,Visa

var reverseWords = function(s) {
    // Step 1: Trim leading and trailing spaces
    s = s.trim();
    
    // Step 2: Split the string into words, handling multiple spaces
    const words = s.split(/\s+/);
    
    // Step 3: Reverse the array of words
    words.reverse();
    
    // Step 4: Join the words with a single space
    return words.join(' ');
};


// Example usage:
console.log(reverseWords("the sky is blue"));    // Output: "blue is sky the"
console.log(reverseWords("  hello world  "));    // Output: "world hello"
console.log(reverseWords("a good   example"));   // Output: "example good a"
