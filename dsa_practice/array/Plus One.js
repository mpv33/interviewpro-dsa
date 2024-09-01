// Q:https://leetcode.com/problems/plus-one/description/
// tag :Facebook ✯   Google ✯   Amazon ✯   Adobe ✯   Apple ✯   ByteDance

function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] < 9) {
        digits[i]++;
        return digits;
      }
      digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
  }
  
  // Example usage:
  console.log(plusOne([1, 2, 3])); // Output: [1, 2, 4]
  console.log(plusOne([4, 3, 2, 1])); // Output: [4, 3, 2, 2]
  console.log(plusOne([9])); // Output: [1, 0]
  


  function plusOne(digits) {
    // Convert the array of digits into a string
    let numberStr = digits.join('');
    
    // Convert the string to a BigInt and add one
    let number = BigInt(numberStr) + BigInt(1);
    
    // Convert the result back to a string
    numberStr = number.toString();
    
    // Convert the string back to an array of digits
    return Array.from(numberStr, digit => Number(digit));
  }
  
  // Example usage:
  console.log(plusOne([1, 2, 3])); // Output: [1, 2, 4]
  console.log(plusOne([4, 3, 2, 1])); // Output: [4, 3, 2, 2]
  console.log(plusOne([9, 9, 9])); // Output: [1, 0, 0, 0]
  