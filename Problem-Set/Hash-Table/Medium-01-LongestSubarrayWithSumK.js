/*
Longest Subarray with Sum K :-
----------------------------
Given an array arr[] containing integers and an integer k, your task is to find the length of the longest subarray 
where the sum of its elements is equal to the given value k. If there is no subarray with sum equal to k, return 0.

Examples:
--------
Input: arr[] = [10, 5, 2, 7, 1, -10], k = 15
Output: 6
Explanation: Subarrays with sum = 15 are [5, 2, 7, 1], [10, 5] and [10, 5, 2, 7, 1, -10]. The length of the longest 
subarray with a sum of 15 is 6.

Input: arr[] = [-5, 8, -14, 2, 4, 12], k = -5
Output: 5
Explanation: Only subarray with sum = -5 is [-5, 8, -14, 2, 4] of length 5.

Input: arr[] = [10, -10, 20, 30], k = 5
Output: 0
Explanation: No subarray with sum = 5 is present in arr[].

Constraints:
1 ≤ arr.size() ≤ 105
-104 ≤ arr[i] ≤ 104
-109 ≤ k ≤ 109                          */

// Alternative: Sliding Window Approach (Only for Positive Numbers):-
// const longestSubarray = (arr, k) => {
//   let i = 0;
//   let j = 0;
//   let sum = 0;
//   let maxLength = 0;

//   while (j < arr.length) {
//     sum = sum + arr[j];
//     while (sum > k) {
//       sum = sum - arr[i];
//       i++;
//     }
//     if (sum === k) {
//       maxLength = Math.max(maxLength, j - i + 1);
//     }
//     j++;
//   }
//   return maxLength;
// };

// 🔥 Approach: Prefix Sum + HashMap :-
function longestSubarrayWithSumK(arr, k) {
  let prefixMap = new Map(); // Stores {prefixSum: first occurrence index}
  let prefixSum = 0,
    maxLen = 0;

  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i]; // Prefix sum update karo

    // Agar sum directly k ke barabar ho gaya, toh max length update karo
    if (prefixSum === k) {
      maxLen = i + 1;
    }

    // Agar (prefixSum - k) pehle se map me hai, toh maxLen update karo
    if (prefixMap.has(prefixSum - k)) {
      maxLen = Math.max(maxLen, i - prefixMap.get(prefixSum - k));
    }

    // Agar prefixSum pehli baar mila hai, toh uska index store karo
    if (!prefixMap.has(prefixSum)) {
      // Pehli baar aaya toh hi store karo
      prefixMap.set(prefixSum, i);
    }
  }

  return maxLen;
}

// 🔥 Test Cases
console.log(longestSubarrayWithSumK([10, 5, 2, 7, 1, -10], 15)); // Output: 6
console.log(longestSubarrayWithSumK([-5, 8, -14, 2, 4, 12], -5)); // Output: 5
console.log(longestSubarrayWithSumK([10, -10, 20, 30], 5)); // Output: 0
