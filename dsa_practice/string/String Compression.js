// Q:https://leetcode.com/problems/string-compression/description/
// tag :expedia, Amazon ,Microsoft ,Goldman Sachs ,Apple , Facebook ,Visa,Yandex,Redfin



 var compress = function(chars) {
    let writeIndex = 0; // Position to write the compressed characters
    let readIndex = 0; // Position to read characters
    
    // Loop through the array
    while (readIndex < chars.length) {
        let char = chars[readIndex]; // Current character to compress
        let count = 0;
        
        // Count how many times char repeats
        while (readIndex < chars.length && chars[readIndex] === char) {
            readIndex++;
            count++;
        }
        
        // Write the character to the array
        chars[writeIndex++] = char;
        
        // If count is greater than 1, write the count as characters
        if (count > 1) {
            const countStr = count.toString(); // Convert count to string
            for (let i = 0; i < countStr.length; i++) {
                chars[writeIndex++] = countStr[i]; // Write each digit
            }
        }
    }
    
    // Return the new length of the compressed array
    return writeIndex;
};

// Example usage:
let chars1 = ["a", "a", "b", "b", "c", "c", "c"];
console.log(compress(chars1)); // Output: 6
console.log(chars1.slice(0, 6)); // Output: ["a", "2", "b", "2", "c", "3"]

let chars2 = ["a"];
console.log(compress(chars2)); // Output: 1
console.log(chars2.slice(0, 1)); // Output: ["a"]

let chars3 = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"];
console.log(compress(chars3)); // Output: 4
console.log(chars3.slice(0, 4)); // Output: ["a", "b", "1", "2"]
