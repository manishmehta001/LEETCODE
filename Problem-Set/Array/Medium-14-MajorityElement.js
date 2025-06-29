/*
229. Majority Element II
------------------------
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

 
Example 1:
----------
Input: nums = [3,2,3]
Output: [3]

Example 2:
----------
Input: nums = [1]
Output: [1]

Example 3:
----------
Input: nums = [1,2]
Output: [1,2]
 

Constraints:
-----------
1 <= nums.length <= 5 * 104
-109 <= nums[i] <= 109
 

Follow up: Could you solve the problem in linear time and in O(1) space?                   */

const majorityElement = (nums) => {
  if (!nums && nums.length === 0) return [];

  let candidate1 = null;
  let candidate2 = null;

  let count1 = 0;
  let count2 = 0;

  for (const num of nums) {
    if (candidate1 === num) {
      count1++;
    } else if (candidate2 === num) {
      count2++;
    } else if (count1 === 0) {
      candidate1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  // Second pass: Validating the candidates
  count1 = count2 = 0;
  for (const num of nums) {
    if (candidate1 === num) {
      count1++;
    } else if (candidate2 === num) {
      count2++;
    }
  }

  let result = [];

  if (count1 > Math.floor(nums.length / 3)) result.push(candidate1);
  if (count2 > Math.floor(nums.length / 3)) result.push(candidate2);

  return result;
};

// Test Cases
console.log(majorityElement([3, 2, 3])); // Output: [3]
console.log(majorityElement([1])); // Output: [1]
console.log(majorityElement([1, 2])); // Output: [1,2]
console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2])); // Output: [1,2]
