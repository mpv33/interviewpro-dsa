// https://leetcode.com/problems/rotate-string/description/
//  Zoom ✯   Goldman Sachs ✯   Apple ✯   LinkedIn ✯   Microsoft ✯

var rotateString = function(s, goal) {
    // Check if the lengths of s and goal are the same
    if (s.length !== goal.length) return false;

    // Concatenate s with itself
    const doubledS = s + s;

    // Check if goal is a substring of doubledS
    return doubledS.includes(goal);
};
