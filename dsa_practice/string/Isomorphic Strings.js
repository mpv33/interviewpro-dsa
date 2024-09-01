// https://leetcode.com/problems/isomorphic-strings/description/
//  Amazon ✯   LinkedIn ✯   Google ✯

var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    // Hash maps to store the mappings
    const mapS = new Map();
    const mapT = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        // Check mappings for `charS` and `charT`
        if (mapS.has(charS)) {
            if (mapS.get(charS) !== charT) return false;
        } else {
            mapS.set(charS, charT);
        }

        if (mapT.has(charT)) {
            if (mapT.get(charT) !== charS) return false;
        } else {
            mapT.set(charT, charS);
        }
    }

    return true;
};
