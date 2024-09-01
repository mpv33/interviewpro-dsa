// https://leetcode.com/problems/find-the-duplicate-number/description/
// Amazon ✯   Paytm ✯   Zoho ✯   Flipkart ✯   DE-Shaw ✯   Adobe   Bloomberg 
//  Cisco   eBay   Expedia   Goldman Sachs   Nutanix   PayPal   Splunk   Uber   VMware   Yahoo   Capgemini   TCS   BNY Mellon   OLA   Housing.com   PegaSystems   Unthinkable Solution   Microsoft   HashedIn   Virtusa   Facebook   Uber   Apple   Google   Qualcomm

// time-o(nlogn) space -o(1)
function findDuplicate(nums) {
    let low = 1;
    let high = nums.length - 1;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        let count = 0;

        // Count how many numbers are less than or equal to mid
        for (let num of nums) {
            if (num <= mid) {
                count++;
            }
        }

        // If the count is greater than mid, the duplicate is in the left half
        if (count > mid) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return low;
}

// time-o(n) space -o(n)
function findDuplicate(nums) {
    const numMap = new Map();

    for (let num of nums) {
        if (numMap.has(num)) {
            return num;  // The duplicate is found
        }
        numMap.set(num, true);
    }

    return -1;  // This line should never be reached if there's guaranteed to be a duplicate
}
// Example usage:
console.log(findDuplicate([1, 3, 4, 2, 2])); // Output: 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // Output: 3
console.log(findDuplicate([3, 3, 3, 3, 3])); // Output: 3


