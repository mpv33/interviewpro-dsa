// https://leetcode.com/problems/search-a-2d-matrix-ii/description/
// Amazon ✯   Microsoft ✯   Bloomberg ✯   Apple ✯   Facebook ✯   Oracle

 // time o(m+n) space o(1)
 function searchMatrix(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) return false;

    let rows = matrix.length;
    let cols = matrix[0].length;

    // Start from the top-right corner
    let row = 0;
    let col = cols - 1;

    while (row < rows && col >= 0) {
        if (matrix[row][col] === target) {
            return true;  // Target found
        } else if (matrix[row][col] > target) {
            col--;  // Move left
        } else {
            row++;  // Move down
        }
    }

    return false;  // Target not found
}

// Example usage:
console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5)); // Output: true
console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 20)); // Output: false
