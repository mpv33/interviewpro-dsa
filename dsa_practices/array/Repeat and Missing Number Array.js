// Q :https://www.interviewbit.com/problems/repeat-and-missing-number-array/
// tag :Amazon

function findRepeatingAndMissing(arr) {
    let n = BigInt(arr.length);

    let sum = BigInt(0), sumSquares = BigInt(0);
    for (let i = 0; i < n; i++) {
        let num = BigInt(arr[i]);
        sum += num;
        sumSquares += num * num;
    }

    let expectedSum = (n * (n + BigInt(1))) / BigInt(2);
    let expectedSumSquares = (n * (n + BigInt(1)) * (BigInt(2) * n + BigInt(1))) / BigInt(6);

    let sumDiff = sum - expectedSum; // A - B
    let sumSquaresDiff = sumSquares - expectedSumSquares; // A^2 - B^2

    let sumSum = sumSquaresDiff / sumDiff; // A + B

    let A = (sumDiff + sumSum) / BigInt(2);
    let B = A - sumDiff;

    return [Number(A), Number(B)]; // Convert back to regular number
}

// Example usage:
let arr = [3, 1, 2, 5, 3];
console.log(findRepeatingAndMissing(arr)); // Output: [3, 4]
