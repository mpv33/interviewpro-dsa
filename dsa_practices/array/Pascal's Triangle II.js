// Q:https://leetcode.com/problems/pascals-triangle-ii/description/
// tag :Amazon ✯   Adobe ✯   Microsoft ✯   Goldman Sachs ✯

function getRow(rowIndex) {
    // time n^2 space o(n)
    let row = new Array(rowIndex + 1).fill(0);
    row[0] = 1;
  
    for (let i = 1; i <= rowIndex; i++) {
      for (let j = i; j > 0; j--) {
        row[j] += row[j - 1];
      }
    }
  
    return row;
  }
  
  
  function getRow(rowIndex) {
    // time space o(n)
    let row = [1];
    let current = 1;
  
    for (let k = 1; k <= rowIndex; k++) {
      current = (current * (rowIndex - k + 1)) / k;
      row.push(current);
    }
  
    return row;
  }
  
  // Examples
  console.log(getRow(3)); // Output: [1, 3, 3, 1]
  console.log(getRow(0)); // Output: [1]
  console.log(getRow(1)); // Output: [1, 1]
  
  