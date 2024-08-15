// https://leetcode.com/problems/roman-to-integer/description/ 
//  Amazon ✯   Adobe ✯   Apple ✯   Google ✯   Bloomberg ✯   Facebook   Microsoft   tiktok   Yahoo

function romanToInt(s) {
    // Step 1: Create a mapping of Roman numerals to their integer values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;  // Initialize the total to 0
    
    // Step 2: Iterate through the string
    for (let i = 0; i < s.length; i++) {
        let currentVal = romanMap[s[i]];  // Current Roman numeral value
        let nextVal = romanMap[s[i + 1]];  // Next Roman numeral value
        
        // Step 3: Apply subtraction rule
        if (nextVal && currentVal < nextVal) {
            total -= currentVal;  // Subtract the current value
        } else {
            total += currentVal;  // Add the current value
        }
    }
    
    // Step 4: Return the total value
    return total;
}
