// https://www.geeksforgeeks.org/find-second-largest-element-array/
// SAP LabsRockstand

function findSecondLargest(arr) {
    let n = arr.length;
    if (n < 2) return -1;

    let largest = -Infinity, secondLargest = -Infinity;

    for (let i = 0; i < n; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest === -Infinity ? -1 : secondLargest;
}


// Test cases
console.log(findSecondLargest([12, 35, 1, 10, 34, 1])); // Output: The second largest element is 34
console.log(findSecondLargest([10, 5, 10]));            // Output: The second largest element is 5
console.log(findSecondLargest([10, 10, 10]));           // Output: The second largest does not exist.
