/*
128. Longest Consecutive Sequence
----------------------------------
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:
----------
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
----------
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Example 3:
----------
Input: nums = [1,0,1,2]
Output: 3
 

Constraints:
------------
0 <= nums.length <= 105
-109 <= nums[i] <= 109             */

const longestConsecutive = (nums) => {
  // let result = {};
  // for (let i = 0; i < nums.length; i++) {
  //   if (result[nums[i]] === undefined) {
  //     result[nums[i]] = 1;
  //   } else {
  //     result[nums[i]]++;
  //   }
  // }
  // for (const key in result) {
  //   console.log(key.length);
  //   return result;
  // }

  let longest = 1;
  if (nums.length == 0) return 0;
  let set = new Set(nums);
  for (const val of set) {
    if (!set.has(val - 1)) {
      let count = 1;
      let x = val;
      while (set.has(x + 1)) {
        x++;
        count++;
      }
      longest = Math.max(longest, count);
    }
  }
  return longest;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // Output: 9
console.log(longestConsecutive([1, 0, 1, 2])); // Output: 3
