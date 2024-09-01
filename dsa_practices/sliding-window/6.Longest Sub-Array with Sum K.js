// https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1
// Amazon
function longestSubarrayWithSumK(arr, k) {
    const N = arr.length;
    let start = 0;
    let currentSum = 0;
    let maxLength = 0;

    for (let end = 0; end < N; end++) {
        currentSum += arr[end];
        
        // While the current sum exceeds k, contract the window
        while (currentSum > k && start <= end) {
            currentSum -= arr[start];
            start++;
        }
        
        // If the current sum is exactly k, update the maxLength
        if (currentSum === k) {
            maxLength = Math.max(maxLength, end - start + 1);
        }
    }

    return maxLength;
}

// Example usage:
console.log(longestSubarrayWithSumK([1, 2, 3, 7, 5], 12)); // Output: 2 (subarray [3, 7, 2])
console.log(longestSubarrayWithSumK([1, 1, 1, 1, 1], 3));  // Output: 3 (subarray [1, 1, 1])
