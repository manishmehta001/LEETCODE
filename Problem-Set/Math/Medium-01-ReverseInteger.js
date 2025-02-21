/*
? Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed  32-bit integer range [-231, 231 - 1], then return 0.

? Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

^Example 1:
Input: x = 123
Output: 321

^Example 2:
Input: x = -123
Output: -321

^Example 3:
Input: x = 120
Output: 21
 

Constraints:
-231 <= x <= 231 - 1 */

function reversedNumber(x) {
  let isNegative = x < 0;
  let n = Math.abs(x);
  let reverseNum = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    n = Math.floor(n / 10);
  }
  if (reverseNum > 2 ** 31 - 1) return 0; // Check for overflow
  return isNegative ? -reverseNum : reverseNum;
}

console.log(reversedNumber(1201));
// console.log(reversedNumber(120));
// console.log(reversedNumber(-123));
