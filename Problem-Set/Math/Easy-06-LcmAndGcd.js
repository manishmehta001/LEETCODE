/*Given two integers a and b, write a function lcmAndGcd() to compute their LCM and GCD. The function inputs two integers a and 
b and returns a list containing their LCM and GCD.

Examples:
Input: a = 5 , b = 10
Output: [10, 5]
Explanation: LCM of 5 and 10 is 10, while their GCD is 5.

Input: a = 14 , b = 8
Output: [56, 2]
Explanation: LCM of 14 and 8 is 56, while their GCD is 2.

Input: a = 1 , b = 1
Output: [1, 1]
Explanation: LCM of 1 and 1 is 1, while their GCD is 1.

Expected Time Complexity: O(log(min(a, b))
Expected Auxiliary Space: O(1)

Constraints:
1 <= a, b <= 109

 */
function lcmAndGcd(a, b) {
  // code here
  let gcd = 0;
  const result = [];
  let min = Math.min(a, b);
  for (let i = min; i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
      break;
    }
  }
  let lcm = (a * b) / gcd;
  result.push(lcm);
  result.push(gcd);
  return result;
}

console.log(lcmAndGcd(5, 10));
console.log(lcmAndGcd(14, 8));
console.log(lcmAndGcd(1, 1));
