// Q:https://leetcode.com/problems/trapping-rain-water/description/
// tag :Amazon ✯   Goldman Sachs ✯   Facebook ✯   Bloomberg ✯   Microsoft ✯   Google   Apple   Adobe   Uber   Qualtrics   Rubrik   Snapchat   Intel   Oracle   Paypal   Tesla   Intuit   Citadel   Visa   ServiceNow   National Instruments   Sapient

function trap(height) {
    // time o(n) space o(1)
    let left = 0, right = height.length - 1;
    let left_max = 0, right_max = 0;
    let water_trapped = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= left_max) {
                left_max = height[left];
            } else {
                water_trapped += left_max - height[left];
            }
            left++;
        } else {
            if (height[right] >= right_max) {
                right_max = height[right];
            } else {
                water_trapped += right_max - height[right];
            }
            right--;
        }
    }

    return water_trapped;
}

function trap(height) {
    // time and space o(n)
    if (height.length == 0) return 0;

    const n = height.length;
    const left_max = new Array(n).fill(0);
    const right_max = new Array(n).fill(0);
    let water_trapped = 0;

    // Fill left_max array
    left_max[0] = height[0];
    for (let i = 1; i < n; i++) {
        left_max[i] = Math.max(left_max[i - 1], height[i]);
    }

    // Fill right_max array
    right_max[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        right_max[i] = Math.max(right_max[i + 1], height[i]);
    }

    // Calculate trapped water
    for (let i = 0; i < n; i++) {
        water_trapped += Math.min(left_max[i], right_max[i]) - height[i];
    }

    return water_trapped;
}

// Example usage:
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Output: 6
console.log(trap([4,2,0,3,2,5])); // Output: 9

