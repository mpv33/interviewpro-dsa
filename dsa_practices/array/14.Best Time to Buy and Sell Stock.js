// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
// Amazon ✯   Facebook ✯   Microsoft ✯   Bloomberg ✯   Google ✯   Goldman Sachs   Adobe   Apple   Uber   Expedia   Oracle   Capital One   JPMorgan   Walmart Global Tech   ByteDance   Paypal   VMware   eBay   Cisco   Salesforce   Atlassian   ServiceNow   Visa   Docusign   Alation   tcs   tiktok   Zoho   Netflix   Zoom

 var maxProfit = function(prices) {
    if (prices.length === 0) return 0;  // Handle edge case of empty array

    let minPrice = prices[0];  // Initialize minPrice to the first element
    let maxProfit = 0;         // Initialize maxProfit to 0

    // Start loop from the second element, as the first is already used
    for (let i = 1; i < prices.length; i++) {
        // Update minPrice to the lowest price encountered so far
        minPrice = Math.min(minPrice, prices[i]);

        // Calculate potential profit and update maxProfit if higher
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;  // Return the maximum profit found
};



// Example usage:
console.log(maxProfit([7, 1, 5, 3, 6, 4]));  // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1]));     // Output: 0
