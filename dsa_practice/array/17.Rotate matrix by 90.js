// https://leetcode.com/problems/rotate-image/description/
// Cisco ✯   Facebook ✯   Microsoft ✯   Amazon ✯   Apple ✯   Adobe   Google   Bloomberg   Rubrik   Ube

function rotate(matrix) {
    const n = matrix.length;
    
    // Step 1: Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}
