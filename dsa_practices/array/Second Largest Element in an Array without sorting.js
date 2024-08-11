// https://www.geeksforgeeks.org/find-second-largest-element-array/
// 

function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "The second largest does not exist.";
    }

    let largest = arr[0];
    let secondLargest = null;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] < largest && (secondLargest === null || arr[i] > secondLargest)) {
            secondLargest = arr[i];
        }
    }

    if (secondLargest === null) {
        return "The second largest does not exist.";
    } else {
        return `The second largest element is ${secondLargest}.`;
    }
}

// Test cases
console.log(findSecondLargest([12, 35, 1, 10, 34, 1])); // Output: The second largest element is 34
console.log(findSecondLargest([10, 5, 10]));            // Output: The second largest element is 5
console.log(findSecondLargest([10, 10, 10]));           // Output: The second largest does not exist.
