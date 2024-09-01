// https://leetcode.com/problems/search-a-2d-matrix/description/
//  Facebook ✯   Uber ✯   Accenture ✯   Cisco ✯   Publicis Sapient ✯   
//  HSBC   Novus Platform   Gainsight   Accolite   Xperi   Quest Tech   Amazon 
//  Codenation   Samsung   PhonePe   Wipro   Microsoft   Bloomberg   Apple   Adobe   Goldman Sachs   Oracle   Nvidia   Salesforce

// time o(log(m*n)) space o(1)
 var searchMatrix = function(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) return false;

    const numRows = matrix.length;
    const numCols = matrix[0].length;

    let left = 0;
    let right = numRows * numCols - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midRow = Math.floor(mid / numCols);
        const midCol = mid % numCols;
        const midValue = matrix[midRow][midCol];

        if (midValue === target) {
            return true;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
};

// Example usage:
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3)); // Output: true
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13)); // Output: false
