// Q:https://leetcode.com/problems/the-kth-factor-of-n/description/
// tag : Amazon ✯   Expedia ✯

// time & space : o(n)
function kthFactor(n, k) {
    const factors = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors.push(i);
        }
    }
    return k <= factors.length ? factors[k - 1] : -1;
}

// time o(sqrt of n) space o(1)
function kthFactor(n, k) {
    let count = 0;
    
    // First pass: find factors up to sqrt(n)
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            count++;
            if (count === k) {
                return i;
            }
        }
    }
    
    // Second pass: find factors from sqrt(n) downwards
    for (let i = Math.floor(Math.sqrt(n)); i >= 1; i--) {
        if (n % i === 0) {
            const pair = n / i;
            if (i !== pair) {
                count++;
                if (count === k) {
                    return pair;
                }
            }
        }
    }
    
    return -1;
}

console.log(kthFactor(12, 3)); // Output: 3
console.log(kthFactor(7, 2));  // Output: 7
console.log(kthFactor(4, 4));  // Output: -1

