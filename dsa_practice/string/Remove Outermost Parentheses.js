// https://leetcode.com/problems/remove-outermost-parentheses/description/
//  Microsoft ✯

function removeOuterParentheses(s) {
    let balance = 0;
    let result = '';

    for (let char of s) {
        if (char === '(') {
            if (balance > 0) result += char;
            balance++;
        } else {
            balance--;
            if (balance > 0) result += char;
        }
    }

    return result;
}
