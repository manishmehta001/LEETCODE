/*1. Two Sum=>
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
Constraints:
2 <= nums.length <= 104  
-109 <= nums[i] <= 109
-109 <= target <= 109    
Solution==>  */

var twoSum = function (nums, target) {
  result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        result.push(i, j);
        return result;
      }
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

//2nd methods for o(n) time complexity==>
var twoSum = function (nums, target) {
  let map = {};

  for (i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  for (i = 0; i < nums.length; i++) {
    let index = map[target - nums[i]];

    if (index) {
      return [i, index];
    }
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

//==================================================================//
function twoSum(nums, target) {
  let sortedNums = nums
    .map((val, index) => ({ val, index }))
    .sort((a, b) => a.val - b.val);

  let left = 0;
  let right = sortedNums.length - 1;

  while (left < right) {
    let sum = sortedNums[left].val + sortedNums[right].val;

    if (sum === target) {
      return [sortedNums[left].index, sortedNums[right].index];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
}
