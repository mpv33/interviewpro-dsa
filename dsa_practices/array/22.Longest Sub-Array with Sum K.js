// https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1
// Amazon

// time o(n*2) space o(1) 
function longestSubArrayWithSumK(arr, k) {
    let maxLength = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentSum = 0;
        
        for (let j = i; j < arr.length; j++) {
            currentSum += arr[j];
            
            if (currentSum === k) {
                maxLength = Math.max(maxLength, j - i + 1);
            }
        }
    }

    return maxLength;
}

// time o(n) space o(n) 
function longestSubArrayWithSumK(arr, k) {
    let map = new Map(); // To store (cumulative sum, index) pairs
    let maxLength = 0;
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        // If current sum equals k, update maxLength
        if (currentSum === k) {
            maxLength = i + 1;
        }

        // If (currentSum - k) is found in map, update maxLength
        if (map.has(currentSum - k)) {
            maxLength = Math.max(maxLength, i - map.get(currentSum - k));
        }

        // Store the first occurrence of the current sum
        if (!map.has(currentSum)) {
            map.set(currentSum, i);
        }
    }

    return maxLength;
}

