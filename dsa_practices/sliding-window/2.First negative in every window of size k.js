// https://www.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1
// Amazon

// Time Complexity:𝑂(n*k), space o(n-k+1)
function findFirstNegativeInteger(A, N, K) {
    const result = [];
    // Iterate through the array
    for (let i = 0; i <= N - K; i++) {
        let foundNegative = false;
        
        // Look through the current window
        for (let j = i; j < i + K; j++) {
            if (A[j] < 0) {
                result.push(A[j]);
                foundNegative = true;
                break;
            }
        }
        
        // If no negative number was found, push 0
        if (!foundNegative) {
            result.push(0);
        }
    }

    return result;
}

// Time Complexity:𝑂(n), space o(k)
function findFirstNegativeInteger(A, N, K) {
    const result = [], queue = [];
    for (let i = 0; i < N; i++) {
        if (A[i] < 0) queue.push(i); 
        if (queue[0] < i - K + 1) queue.shift();
        if (i >= K - 1) result.push(queue.length ? A[queue[0]] : 0);
    }

    return result;
}


// Example usage:
const A = [-8, 2, 3, -6, 10];
const N = 5;
const K = 2;
console.log(findFirstNegativeInteger(A, N, K)); // Output: [-8, 0, -6, -6]
