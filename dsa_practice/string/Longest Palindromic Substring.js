// https://leetcode.com/problems/longest-palindromic-substring/description/
// Amazon ✯   Microsoft ✯   Google ✯   Adobe ✯   Facebook ✯   Apple   Oracle   Bloomberg   Goldman Sachs   Zoho   Accolite   Samsung   MakeMyTrip   Visa   Walmart   Qualcomm   Groupon   Intel   HSBC   Innovaccer   Morgan Stanley   HCL Technologies   Flipkart   JPMorgan Chase   SAP Labs   Intuit   Sprinklr   Acko   Quikr   Accenture   Big Basket   ServiceNow   RxLogix   Commvault   Increff   BYJUS   Nykaa   Daffodil Software   FiftyFive Technologies   Sapient Corporation   Cuemath   Nutanix   MagicPIN   NCR Corporation   Unthinkable Solutions   Nagarro   Jupiter Money   GeeksForGeeks   Biz2   Indiamart   IBM

function longestPalindrome(s) {
    let start = 0, end = 0;

    for (let i = 0; i < s.length; i++) {
        // Check for odd-length palindrome (single character center)
        let len1 = expandAroundCenter(s, i, i);
        // Check for even-length palindrome (two character center)
        let len2 = expandAroundCenter(s, i, i + 1);

        // Find the longer of the two lengths
        let len = Math.max(len1, len2);

        // Update the start and end indices of the longest palindrome found
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    // Return the longest palindrome substring
    return s.slice(start, end + 1);
}

// Helper function to expand around the center and return the length of the palindrome
function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    // Length of the palindrome
    return right - left - 1;
}
