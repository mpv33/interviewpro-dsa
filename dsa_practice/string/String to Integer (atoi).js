// https://leetcode.com/problems/string-to-integer-atoi/description/
//  Facebook ✯   Microsoft ✯   Amazon ✯   Google ✯   Bloomberg ✯   Adobe   Goldman Sachs   Redfin   Apple

function myAtoi(s) {
    let i = 0, sign = 1, result = 0;
    const n = s.length;
    
    // Ignore leading whitespaces
    while (i < n && s[i] === ' ') i++;
    
    // Check for sign
    if (i < n && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }
    
    // Convert digits to integer
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        const digit = s[i] - '0';
        
        // Check for overflow before adding the digit
        if (result > (2**31 - 1 - digit) / 10) {
            return sign === 1 ? 2**31 - 1 : -(2**31);
        }
        
        result = result * 10 + digit;
        i++;
    }
    
    return result * sign;
}
