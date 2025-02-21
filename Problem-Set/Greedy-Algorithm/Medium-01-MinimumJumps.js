/*
You are given an array arr[] of non-negative numbers. Each number tells you the maximum number of steps you can jump forward 
from that position.

For example:-
If arr[i] = 3, you can jump 1 step, 2 steps, or 3 steps forward from position i.
If arr[i] = 0, you cannot jump forward from that position.
Your task is to find the minimum number of jumps needed to move from the first position in the array to the last position.

Note:  Return -1 if you can't reach the end of the array.

Examples : 
Input: arr[] = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
Output: 3 
Explanation: First jump from 1st element to 2nd element with value 3. From here we jump to 5th element with value 9, and from 
here we will jump to the last. 

Examples : 
Input: arr = [1, 4, 3, 2, 6, 7]
Output: 2 
Explanation: First we jump from the 1st to 2nd element and then jump to the last element.

Examples : 
Input: arr = [0, 10, 20]
Output: -1
Explanation: We cannot go anywhere from the 1st element.
*/

function minJumps(arr) {
  let n = arr.length;

  // If there's only one element, we're already at the end
  if (n === 1) return 0;

  // If the first element is 0, we can't move
  if (arr[0] === 0) return -1;

  let jumps = 0; // Count of jumps
  let maxReach = 0; // Farthest index we can reach
  let currentEnd = 0; // End of the current jump range
  let i = 0; // Start from index 0

  while (i < n - 1) {
    maxReach = Math.max(maxReach, i + arr[i]); // Update the max we can reach

    // If we've reached the last index, return jumps + 1
    if (maxReach >= n - 1) return jumps + 1;

    // If we reach the end of the current jump, we must jump
    if (i === currentEnd) {
      jumps++; // Increase jump count
      currentEnd = maxReach; // Update the range of the next jump

      // If we're stuck and can't move forward, return -1
      if (currentEnd <= i) return -1;
    }

    i++; // Move to the next index
  }

  return -1; // If we never reach the last index
}

console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]));
