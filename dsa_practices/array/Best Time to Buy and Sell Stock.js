// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
// Amazon ✯   Facebook ✯   Microsoft ✯   Bloomberg ✯   Google ✯   Goldman Sachs   Adobe   Apple   Uber   Expedia   Oracle   Capital One   JPMorgan   Walmart Global Tech   ByteDance   Paypal   VMware   eBay   Cisco   Salesforce   Atlassian   ServiceNow   Visa   Docusign   Alation   tcs   tiktok   Zoho   Netflix   Zoom

function maxProfit(prices) {
    let minPrice = Infinity;  // Start with a very high value for minimum price.
    let maxProfit = 0;        // Initialize maximum profit to 0.

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];  // Update minimum price if a lower price is found.
        } else {
            // Calculate the profit if sold today, and update maxProfit if this profit is higher.
            const profit = prices[i] - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;  // Return the maximum profit found.
}

// Example usage:
console.log(maxProfit([7, 1, 5, 3, 6, 4]));  // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1]));     // Output: 0
