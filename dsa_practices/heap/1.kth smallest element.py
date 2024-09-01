
# https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1
# VMWare Accolite Amazon Microsoft Snapdeal Hike Adobe Google ABCO Cisco

import heapq

def kth_smallest(arr, k):
    # Convert the list to a min-heap
    heapq.heapify(arr)
    
    # Extract the minimum k-1 times
    for _ in range(k - 1):
        heapq.heappop(arr)
    
    # The next element is the k-th smallest
    return heapq.heappop(arr)

# Example usage:
arr1 = [7, 10, 4, 3, 20, 15]
k1 = 3
print(kth_smallest(arr1, k1))  # Output: 7

arr2 = [2, 3, 1, 20, 15]
k2 = 4
print(kth_smallest(arr2, k2))  # Output: 15

