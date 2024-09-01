# https://leetcode.com/problems/kth-largest-element-in-an-array/description/
#Facebook ✯   VMWare ✯   Accolite ✯   Snapdeal ✯   Hike ✯   ABCO   Cisco   Amazon 
# Apple   ByteDance   eBay   Expedia   Oracle   Salesforce   Spotify   Walmart Labs 
# LinkedIn   Samsung   Infosys   JP Morgan   Paypal   McKinsey & Company   Intuit  
# TCS   Accenture   Sprinklr   OYO   Optum   Microsoft   Hexaware Technologies   Uber  
# Pristyn Care   GreenCloud   Sysvin   Alibaba   Times Internet 
# Newgen Software   Travclan   Google   DealShare.in   Silicon Labs   Bloomberg 
# Adobe   tiktok   Goldman Sachs

import heapq

def findKthLargest(nums, k):
    # Create a min-heap of the first k elements
    min_heap = nums[:k]
    heapq.heapify(min_heap)
    
    # Iterate over the rest of the elements
    for num in nums[k:]:
        if num > min_heap[0]:
            heapq.heappop(min_heap)  # Remove the smallest element
            heapq.heappush(min_heap, num)  # Push the current element
    
    # The root of the heap is the k-th largest element
    return min_heap[0]

# Example usage:
nums1 = [3, 2, 1, 5, 6, 4]
k1 = 2
print(findKthLargest(nums1, k1))  # Output: 5

nums2 = [3, 2, 3, 1, 2, 4, 5, 5, 6]
k2 = 4
print(findKthLargest(nums2, k2))  # Output: 4
