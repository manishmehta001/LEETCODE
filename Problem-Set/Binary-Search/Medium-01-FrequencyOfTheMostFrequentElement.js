/*
The frequency of an element is the number of times it occurs in an array.
You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment 
the element at that index by 1.
Return the maximum possible frequency of an element after performing at most k operations.

Example 1:

Input: nums = [1,2,4], k = 5
Output: 3
Explanation: Increment the first element three times and the second element two times to make nums = [4,4,4].
4 has a frequency of 3.

Example 2:

Input: nums = [1,4,8,13], k = 5
Output: 2
Explanation: There are multiple optimal solutions:
- Increment the first element three times to make nums = [4,4,8,13]. 4 has a frequency of 2.
- Increment the second element four times to make nums = [1,8,8,13]. 8 has a frequency of 2.
- Increment the third element five times to make nums = [1,4,13,13]. 13 has a frequency of 2.
Example 3:

Input: nums = [3,9,6], k = 2
Output: 1
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105
1 <= k <= 105
*/

function maxFrequency(nums, k) {
  nums.sort((a, b) => a - b); // Step 1: Sort the array
  let left = 0,
    maxFreq = 0,
    totalCost = 0;

  // Step 2: Expand the window
  for (let right = 0; right < nums.length; right++) {
    totalCost += nums[right];

    // Step 3: Check if cost is within `k`
    while (nums[right] * (right - left + 1) - totalCost > k) {
      totalCost -= nums[left];
      left++;
    }

    // Step 4: Update max frequency
    maxFreq = Math.max(maxFreq, right - left + 1);
  }

  return maxFreq;
}

// ✅ Test Cases
console.log(maxFrequency([1, 2, 4], 5)); // Output: 3
console.log(maxFrequency([1, 4, 8, 13], 5)); // Output: 2
console.log(maxFrequency([3, 9, 6], 2)); // Output: 1
