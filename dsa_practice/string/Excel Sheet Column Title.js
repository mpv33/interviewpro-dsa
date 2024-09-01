// Q:https://leetcode.com/problems/excel-sheet-column-title/description/
// tag :Microsoft ✯   Paytm ✯   Samsung ✯   Goldman Sachs ✯   Directi ✯   Adobe   MAQ Software   Zomato   Expedia Group   Oracle   Apple   OYO   Optum   Google   JP Morgan and Chase   UST Global   Zoho   Prop Tiger   Hashedin   MindTree   Deloitte   Josh Technologies   Commvault   Lowes   Amazon


function convertToTitle(columnNumber) {
    let result = '';  // Initialize an empty string to build the column title

    while (columnNumber > 0) {
        columnNumber--;  // Adjust to 0-based indexing
        let charCode = columnNumber % 26;  // Determine the position within the alphabet
        result = String.fromCharCode(65 + charCode) + result;  // Use ASCII value for 'A' (65) and add charCode
        columnNumber = Math.floor(columnNumber / 26);  // Move to the next digit
    }

    return result;  // Return the final column title
}

// Example inputs and outputs
console.log(convertToTitle(1));   // Output: "A"
console.log(convertToTitle(28));  // Output: "AB"
console.log(convertToTitle(701)); // Output: "ZY"
console.log(convertToTitle(52));  // Output: "AZ"
console.log(convertToTitle(702)); // Output: "ZZ"
