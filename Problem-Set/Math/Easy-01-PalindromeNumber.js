/*
Given an integer x, return true if x is a 
palindrome, and false otherwise.

 

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:
-231 <= x <= 231 - 1
 
 solution = >   */

const isPalindrome = (num) => {
  let duplicate = num;
  let reverseNum = 0;
  while (num > 0) {
    let lastDigit = num % 10;
    num = Math.floor(num / 10);
    reverseNum = reverseNum * 10 + lastDigit;
  }
  return reverseNum === duplicate ? true : false;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
