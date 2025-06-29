/*
Move Zeroes:-
------------
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:
----------
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
-----------
Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
*/

const moveZeroes = function (nums) {
  let nonZeroIndex = 0; // Non-zero elements ka track rakhne ke liye

  // Step 1: Non-zero elements ko shift karna
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }
  // Step 2: Remaining positions ko zero se fill karna
  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
};

// Test Cases
const arr1 = [0, 1, 0, 3, 12];
moveZeroes(arr1);
console.log(arr1); // Output: [1,3,12,0,0]

const arr2 = [0, 0, 1];
moveZeroes(arr2);
console.log(arr2); // Output: [1,0,0]
