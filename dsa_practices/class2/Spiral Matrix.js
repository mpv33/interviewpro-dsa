// Q: https://leetcode.com/problems/spiral-matrix/description/
// tag :Microsoft ✯   Amazon ✯   Apple ✯   Facebook ✯   Google ✯   Adobe   LiveRamp   Zillow   Oracle   Wipro   Jio   Accenture   PayTM   OYO   Cisco   Zoho   Uber   JPMorgan   SAP Labs   Cognizant   Salesforce   Browserstack



function spiralOrder(matrix) {
    if (matrix.length === 0) return [];

    let result = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // Traverse from left to right along the top boundary
        for (let j = left; j <= right; j++) {
            result.push(matrix[top][j]);
        }
        top++;

        // Traverse from top to bottom along the right boundary
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);  // Corrected indices
        }
        right--;

        // Traverse from right to left along the bottom boundary (if still valid)
        if (top <= bottom) {
            for (let j = right; j >= left; j--) {
                result.push(matrix[bottom][j]);
            }
            bottom--;
        }

        // Traverse from bottom to top along the left boundary (if still valid)
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
}

// Example usage
let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(spiralOrder(matrix1)); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

let matrix2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
console.log(spiralOrder(matrix2)); // Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
