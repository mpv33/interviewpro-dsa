// Q:https://leetcode.com/problems/pascals-triangle/description/
// tag : Amazon ✯   Adobe ✯   Google ✯   Samsung ✯   Capgemini ✯   JPMorgan and Chase   Inca Infotech   ServiceNow   Mindtree   IBM (Phemesoft)   Apple   Grab   TCS   Microsoft   Goldman Sachs   Snapchat   Uber   Yahoo 


 var generate = function(numRows) {
    if (numRows === 0) return [];
    
    const result = [];
    let row = [1]; // Start with the first row

    for (let i = 0; i < numRows; i++) {
        result.push(row);
        const newRow = new Array(i + 1).fill(1); // Create a new row with 1's

        // Compute the values of the new row
        for (let j = 1; j < i; j++) {
            newRow[j] = row[j - 1] + row[j];
        }

        row = newRow; // Move to the next row
    }

    return result;
};
