// https://leetcode.com/problems/sliding-window-maximum/description/
//  Amazon ✯   Akuna Capital ✯   Databricks ✯   Dropbox ✯   Expedia ✯   IBM   American Express   Intel   LinkedIn   Mathworks   Oracle   PayPal   Splunk   Tesla   Twitter   Two Sigma   Yelp   Cruise Automation   Instacart   Goldman Sachs   Quikr   Morgan Stanley   Google   Cisco   Innovaccer   HSBC   Razorpay   Samsung   Flipkart   Walmart   OYO   Soroco   Lifesight   Hughes Systique Corporation (HSC)   Microsoft   HCL Tech   MSCI   Mercer Mettl   Incedo Inc.   Virtusa   MobiKwik   Hashedin   Cognizant   Practo   Nagarro   Wadhwani AI   Salesforce   PayTM   EPAM Systems   Cashfree Payments   Accion Labs India   Byte Bonding Tech   Emerson electric co.   Uber   Facebook   Adobe   Citadel   ByteDance   Apple   Twilio   tiktok   Bloomberg   VMware   Booking.com   DoorDash   DE Shaw   Quora

// time o(n*B)
function slidingWindowMax(A, B) {
    const N = A.length;
    const result = [];
    
    // Handle case where B > length of A
    if (B > N) {
        return [Math.max(...A)];
    }
    
    // Iterate over each window position
    for (let i = 0; i <= N - B; i++) {
        let windowMax = A[i];
        // Find the maximum in the current window
        for (let j = i + 1; j < i + B; j++) {
            if (A[j] > windowMax) {
                windowMax = A[j];
            }
        }
        // Add the maximum of the current window to the result
        result.push(windowMax);
    }
    
    return result;
}

// time o(n)
function slidingWindowMax(A, B) {
    const N = A.length;
    if (B > N) {
        return [Math.max(...A)];
    }

    const result = [];
    const deque = []; // Stores indices of array elements

    for (let i = 0; i < N; i++) {
        // Remove indices that are out of the current window
        if (deque.length && deque[0] === i - B) {
            deque.shift();
        }

        // Remove elements from the deque which are less than the current element
        while (deque.length && A[deque[deque.length - 1]] <= A[i]) {
            deque.pop();
        }

        // Add current element index to the deque
        deque.push(i);

        // The current window's maximum is at the front of the deque
        if (i >= B - 1) {
            result.push(A[deque[0]]);
        }
    }

    return result;
}

// Example usage:
console.log(slidingWindowMax([1, 3, -1, -3, 5, 3, 6, 7], 3)); // Output: [3, 3, 5, 5, 6, 7]
