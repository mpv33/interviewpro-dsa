// https://leetcode.com/problems/longest-common-prefix/description/
// Facebook ✯   Apple ✯   Google ✯   Adobe ✯   Amazon ✯   Microsoft   Bloomberg   Uber   Quora   SAP

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    
    let prefix = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1); // Remove last character from prefix
            if (prefix === "") return "";
        }
    }
    
    return prefix;
};
