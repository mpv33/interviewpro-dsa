// Q:https://leetcode.com/problems/corporate-flight-bookings/description/
// tag : Amazon ✯   Goldman Sachs ✯

function corpFlightBookings(bookings, n) {
    // Initialize the answer array with zeros
    const answer = new Array(n).fill(0);
    
    // Apply the difference array technique
    for (const [first, last, seats] of bookings) {
        answer[first - 1] += seats;  // Increment the start of the booking
        if (last < n) {
            answer[last] -= seats;  // Decrement the end of the booking + 1
        }
    }
    
    // Compute the prefix sums to get the actual number of seats booked for each flight
    for (let i = 1; i < n; i++) {
        answer[i] += answer[i - 1];
    }
    
    return answer;
}

// Example usage:
console.log(corpFlightBookings([[1,2,10],[2,3,20],[2,5,25]], 5)); // Output: [10, 55, 45, 25, 25]
console.log(corpFlightBookings([[1,2,10],[2,2,15]], 2)); // Output: [10, 25]
