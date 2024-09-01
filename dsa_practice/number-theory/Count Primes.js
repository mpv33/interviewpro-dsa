// Q:https://leetcode.com/problems/count-primes/description/ 
// tag : Capital One ✯   Microsoft ✯   Amazon ✯   Apple ✯   Adobe ✯   SAP   tiktok


// time o(n sqrt of n) space o(1)
function countPrimes(n) {
    if (n <= 2) return 0;

    const isPrime = new Array(n).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return isPrime.reduce((count, prime) => count + (prime ? 1 : 0), 0);
}

console.log(countPrimes(10)); // Output: 4
console.log(countPrimes(0));  // Output: 0
console.log(countPrimes(1));  // Output: 0



// time o(nlog logn) space o(n)
function countPrimes(n) {
    if (n <= 2) return 0;

    const isPrime = new Array(n).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return isPrime.reduce((count, prime) => count + (prime ? 1 : 0), 0);
}

console.log(countPrimes(10)); // Output: 4
console.log(countPrimes(0));  // Output: 0
console.log(countPrimes(1));  // Output: 0


