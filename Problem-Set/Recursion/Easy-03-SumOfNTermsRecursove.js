/*
Given an integer n, calculate the sum of series 13 + 23 + 33 + 43 + … till n-th term.

Examples:
Input: n = 5
Output: 225
Explanation: 1***3 + 2***3 + 3***3 + 4***3 + 5***3 = 225

Input: n = 7
Output: 784
Explanation: 1***3 + 2***3 + 3***3 + 4***3 + 5***3 + 6***3 + 7***3 = 784

Constraints:
1 <= n <= 200 
*/

function sumOfSeries(n, current = 1, sum = 0) {
  if (current > n) return sum;
  sum += current * current * current;
  return sumOfSeries(n, current + 1, sum);
}
console.log(sumOfSeries(5));
console.log(sumOfSeries(7));
