/*
 136. Single Number:-
-------------------
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
-----------
Input: nums = [2,2,1]
Output: 1

Example 2:
----------
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
----------
Input: nums = [1]
Output: 1

Constraints:
------------
1 <= nums.length <= 3 _ 104
-3 _ 104 <= nums[i] <= 3 \* 104
Each element in the array appears twice except for one element which appears only once.                         */

const singleNumber = (nums) => {
  let result = {};

  for (let i = 0; i < nums.length; i++) {
    if (result[nums[i]] === undefined) {
      result[nums[i]] = 1;
    } else {
      result[nums[i]]++;
    }
  }

  for (const key in result) {
    if (result[key] === 1) {
      return Number(key);
    }
  }
};

console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([1]));
