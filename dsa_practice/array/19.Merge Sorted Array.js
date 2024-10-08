// https://leetcode.com/problems/merge-sorted-array/description/
//  Facebook ✯   Microsoft ✯   Apple ✯   Amazon ✯   LinkedIn ✯   Bloomberg   Shopee   Indeed   Uber   Oracle

 var merge = function(nums1, m, nums2, n) {
    let i = m - 1; // Pointer for the end of the initialized part of nums1
    let j = n - 1; // Pointer for the end of nums2
    let k = m + n - 1; // Pointer for the end of nums1

    // Merge in reverse order
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // If there are remaining elements in nums2, copy them to nums1
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }

    // No need to copy nums1 remaining elements, they are already in place
};
