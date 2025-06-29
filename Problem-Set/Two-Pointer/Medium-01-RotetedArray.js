/*
 Rotate Array
-----------------
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:
-----------
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
----------
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:
------------
1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
*/

var rotate = function (nums, k) {
  k = k % nums.length; // Avoid unnecessary rotations
  if (k === 0) return; // Agar k 0 hai, toh kuch mat karo

  let rotatedPart = nums.slice(-k);
  let remainingPart = nums.slice(0, nums.length - k);

  nums.splice(0, nums.length, ...rotatedPart, ...remainingPart);
};

// Test Cases
let arr1 = [1, 2, 3, 4, 5, 6, 7];
rotate(arr1, 3);
console.log(arr1); // Output: [5,6,7,1,2,3,4]

let arr2 = [-1, -100, 3, 99];
rotate(arr2, 2);
console.log(arr2); // Output: [3,99,-1,-100]

let arr3 = [1];
rotate(arr3, 0);
console.log(arr3); // Output: [1] ✅ (Correct output)
