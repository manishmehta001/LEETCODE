/*
Given two sorted arrays a[] and b[], where each array may contain duplicate elements , the task is to return the elements in 
the union of the two arrays in sorted order.

Union of two arrays can be defined as the set containing distinct common elements that are present in either of the arrays.

Examples:
---------
Input: a[] = [1, 2, 3, 4, 5], b[] = [1, 2, 3, 6, 7]
Output: 1 2 3 4 5 6 7
Explanation: Distinct elements including both the arrays are: 1 2 3 4 5 6 7.

Input: a[] = [2, 2, 3, 4, 5], b[] = [1, 1, 2, 3, 4]
Output: 1 2 3 4 5
Explanation: Distinct elements including both the arrays are: 1 2 3 4 5.

Input: a[] = [1, 1, 1, 1, 1], b[] = [2, 2, 2, 2, 2]
Output: 1 2
Explanation: Distinct elements including both the arrays are: 1 2.

Constraints:
1  <=  a.size(), b.size()  <=  105
-109  <=  a[i] , b[i]  <=  109

*/

// const findUnion = (a, b) => {
//   let count = new Set([...a, ...b]); // Set se duplicates remove ho jayenge

//   return [...count].sort((x, y) => x - y); // Sorted array return karenge
// };

const findUnion = (a, b) => {
  let count = {};
  a.forEach((element) => {
    if (count[element] === undefined) {
      count[element] = 1;
    }
  });

  b.forEach((element) => {
    if (count[element] === undefined) {
      count[element] = 1;
    }
  });

  let arrString = Object.keys(count)
    .map(Number)
    .sort((a, b) => a - b);

  return arrString;
};

console.log(findUnion([2, 2, 3, 4, 5], [1, 1, 2, 3, 4]));
console.log(findUnion([1, 1, 1, 1, 1], [2, 2, 2, 2, 2]));
