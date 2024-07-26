// Q:https://leetcode.com/problems/is-subsequence/description/
// tag :Amazon,Bloomberg,Facebook,Microsoft,Pinterest,Zoho,Accolite,Tesco,PayTM,Quadrical AI,Google,Rootstock Software,Unthinkable Solutions,Josh Technologies,Yandex,Adobe

function isSubsequence(s, t) {
    let i = 0, j = 0;

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++; // Move to the next character in s
        }
        j++; // Always move to the next character in t
    }

    return i === s.length;
}

// Sample inputs and outputs

// Example 1
let s1 = "abc", t1 = "ahbgdc";
console.log(isSubsequence(s1, t1)); // Output: true

// Example 2
let s2 = "axc", t2 = "ahbgdc";
console.log(isSubsequence(s2, t2)); // Output: false
