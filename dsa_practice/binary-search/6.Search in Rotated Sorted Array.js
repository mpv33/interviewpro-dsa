// https://leetcode.com/problems/search-in-rotated-sorted-array/description/
// Amazon ✯   Paytm ✯   Flipkart ✯   Snapdeal ✯   DE Shaw ✯   FactSet   Hike 
//   MakeMyTrip   Intuit   BankBazaar   Times Internet   Facebook   tcs   Disney+ Hotstar 
//   Qualcomm   Siemens   Optum   PhonePe   OYO   Arcesium   ZS Associates   Paytm   Park+  
//    Microsoft   Freecharge   Travclan   Spinny   NCR Corporation   JPMorgan   Proteum  
//    Freshworks   Cognizant   PayPal   SAP Labs   LinkedIn   Expedia   American Express 
//    Innovacer   Informatica   Grab   Curefit   Capgemini   Accenture   Cisco   ShareChat
//     Apple   Delhivery   Eaton   Kempston Global   Groupon   Redbus   Qualys  
//    ION Trading   InMobi   Practo   Maersk   Bloomberg   Airtel   Rippling  
//    MindTree   Samsung   Sigmoid   Prystin Care   EagleView India   HashedIn 
//    Nagarro   Adobe   Interics Tech   Citicorp   Traveloka   Vimana Aerotech 
//    Navi Technologies   Veridic Private Limited   ByteDance   Alibaba   Tencent 
//    Twitch   Yahoo   Yandex   Zillow   Zulily   Walmart Global Tech   Oracle  
//    tiktok   VMware   Google   Visa   ServiceNow   Expedia   Nvidia  
//   Salesforce   Goldman Sachs   Morgan Stanley   Splunk


 var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = nums[mid];

        if (midValue === target) {
            return mid;
        }

        // Determine which side is sorted
        if (nums[left] <= midValue) { // Left side is sorted
            if (nums[left] <= target && target < midValue) {
                right = mid - 1; // Target is in the left side
            } else {
                left = mid + 1; // Target is in the right side
            }
        } else { // Right side is sorted
            if (midValue < target && target <= nums[right]) {
                left = mid + 1; // Target is in the right side
            } else {
                right = mid - 1; // Target is in the left side
            }
        }
    }

    return -1; // Target is not found
};

// Example usage:
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // Output: -1
console.log(search([1], 0)); // Output: -1
