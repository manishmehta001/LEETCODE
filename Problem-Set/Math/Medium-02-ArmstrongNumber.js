/**Problem Statement
Given an integer n, return true if n is an Armstrong number, otherwise return false.

An Armstrong number (also known as a narcissistic number, pluperfect digital invariant (PPDI), or plus perfect number) of k 
digits is a number that is equal to the sum of its own digits, each raised to the power of k.

Formally, a number n is an Armstrong number if:

𝑛=𝑑*𝑘1+𝑑*𝑘2+...+𝑑**kn=d 1k +d 2k​ +...+d kk
 
where d1, d2, ..., dk are the digits of n, and k is the number of digits. 

Example 1:
Input: n = 153
Output: true
Explanation:
153 has 3 digits. =>1***3 +5***3 +3***3 =1+125+27=153

Example 2:
Input: n = 9474
Output: true
Explanation:
9474 has 4 digits. => 9****4+4****4+7****4+4*****4 +7****4 +4****4 = 6561+256+2401+256 = 9474

Example 3:
Input: n = 9475
Output: false
Explanation:
*/

function isArmstrong(num) {
  let duplicate = num;
  let sum = 0;
  let digits = num.toString().length;
  while (duplicate > 0) {
    let lastDigit = duplicate % 10;
    sum = sum + Math.pow(lastDigit, digits);
    duplicate = Math.floor(duplicate / 10);
  }
  return num === sum ? true : false;
}

// ✅ Test Cases
console.log(isArmstrong(153)); // true
console.log(isArmstrong(9474)); // true
console.log(isArmstrong(9475)); // false
console.log(isArmstrong(370)); // true
console.log(isArmstrong(1)); // true
