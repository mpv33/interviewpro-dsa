// Q: https://leetcode.com/problems/can-place-flowers/description/
// tag : LinkedIn ,  Facebook , Amazon , Bloomberg ,Yahoo 

function canPlaceFlowers(flowerbed, n) {
    let i = 0;
    const len = flowerbed.length;

    while (i < len) {
        if (flowerbed[i] === 0) {
            // Check if the left plot is empty or it is the start of the array
            // and the right plot is empty or it is the end of the array
            const leftEmpty = (i === 0) || (flowerbed[i - 1] === 0);
            const rightEmpty = (i === len - 1) || (flowerbed[i + 1] === 0);
            
            if (leftEmpty && rightEmpty) {
                // Plant a flower
                flowerbed[i] = 1;
                n--;
                // If we have planted all required flowers, return true
                if (n === 0) return true;
                // Skip the next plot since we just planted a flower
                i += 2;
                continue;
            }
        }
        i++;
    }

    return n <= 0;
}

// Example usage:
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));  // Output: true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));  // Output: false
