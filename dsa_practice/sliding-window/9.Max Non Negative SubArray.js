// Q:https://www.interviewbit.com/problems/max-non-negative-subarray/
// tag :Google

function maxNonNegativeSubarray(A) {
    let maxSum = -1;
    let currentSum = 0;
    let maxStart = -1;
    let maxEnd = -1;
    let currentStart = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] >= 0) {
            currentSum += A[i];
            if (currentSum > maxSum || 
               (currentSum === maxSum && (i - currentStart) > (maxEnd - maxStart))) {
                maxSum = currentSum;
                maxStart = currentStart;
                maxEnd = i;
            }
        } else {
            currentSum = 0;
            currentStart = i + 1;
        }
    }

    if (maxStart === -1) {  // No non-negative subarray found
        return [];
    }
    return A.slice(maxStart, maxEnd + 1);
}

// Example usage:
const A1 = [1, 2, 5, -7, 2, 3];
const A2 = [10, -1, 2, 3, -4, 100];

console.log(maxNonNegativeSubarray(A1)); // Output: [1, 2, 5]
console.log(maxNonNegativeSubarray(A2)); // Output: [100]
