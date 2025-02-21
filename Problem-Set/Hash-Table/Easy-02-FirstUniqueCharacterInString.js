/*
Given a string s, find the first non-repeating character and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"  
Output: 0  
Explanation: The first unique character is 'l' at index 0.

Input: s = "loveleetcode"  
Output: 2  
Explanation: The first unique character is 'v' at index 2.

Input: s = "aabb"  
Output: -1  
Explanation: There is no unique character in the string.

Constraints:
1 <= s.length <= 10^5
s consists of lowercase English letters.

🔹 Follow-up:
Can you solve this problem in O(N) time complexity? 🚀           */

function firstUniqChar(s) {
  let hash = new Array(256).fill(0); // 🔹 Fixed size array for ASCII

  // Step 1: Count frequency of each character
  for (let char of s) {
    hash[char.charCodeAt(0)]++;
  }

  // Step 2: Find first unique character
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i].charCodeAt(0)] === 1) {
      return i;
    }
  }

  return -1;
}

// ✅ Test Cases
console.log(firstUniqChar("leetcode")); // Output: 0
console.log(firstUniqChar("loveleetcode")); // Output: 2
console.log(firstUniqChar("aabb")); // Output: -1
