// Q:https://leetcode.com/problems/set-matrix-zeroes/description/
// tag :Microsoft ✯   Amazon ✯   Facebook ✯   Apple ✯   Bloomberg ✯


 var setZeroes = function(matrix) {
    const m = matrix.length, n = matrix[0].length;
    let firstRowZero = matrix[0].some(val => val === 0);
    let firstColZero = matrix.some(row => row[0] === 0);
  
    for (let i = 1; i < m; i++)
      for (let j = 1; j < n; j++)
        if (matrix[i][j] === 0) matrix[i][0] = matrix[0][j] = 0;
  
    for (let i = 1; i < m; i++)
      for (let j = 1; j < n; j++)
        if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
  
    if (firstRowZero) matrix[0].fill(0);
    if (firstColZero) for (let i = 0; i < m; i++) matrix[i][0] = 0;
  };
  
  
  // Examples
  let matrix1 = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ];
  setZeroes(matrix1);
  console.log(matrix1); // Output: [[1,0,1],[0,0,0],[1,0,1]]
  
  let matrix2 = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
  ];
  setZeroes(matrix2);
  console.log(matrix2); // Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
  