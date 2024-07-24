// Q: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/
 // tag : Amazon

 function kidsWithCandies(candies, extraCandies) {
    const maxCandies = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= maxCandies);
  }
  
  // Example 1
  const candies1 = [2, 3, 5, 1, 3];
  const extraCandies1 = 3;
  console.log(kidsWithCandies(candies1, extraCandies1)); // Output: [true, true, true, false, true]
  
  // Example 2
  const candies2 = [4, 2, 1, 1, 2];
  const extraCandies2 = 1;
  console.log(kidsWithCandies(candies2, extraCandies2)); // Output: [true, false, false, false, false]
  
  // Example 3
  const candies3 = [12, 1, 12];
  const extraCandies3 = 10;
  console.log(kidsWithCandies(candies3, extraCandies3)); // Output: [true, false, true]
  