/*
73. Set Matrix Zeroes
---------------------
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
You must do it in place.

Example 1:
---------
[[1,1,1],             [[1,0,1],
[1,0,1],   =>         [0,0,0],
[1,1,1]]              [1,0,1]]
  


Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:
----------
[[0,1,2,0],             [[0,0,0,0],
[3,4,5,2],   =>         [0,4,5,0],
[1,3,1,5]]              [0,3,1,0]]

Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 

Constraints:
------------
m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1
 

Follow up:
----------
A straightforward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?                                               */

var setZeroes = function (matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let firstRowHasZero = false;
  let firstColHasZero = false;

  // Step 1: Check if first row has a zero
  for (let j = 0; j < cols; j++) {
    if (matrix[0][j] === 0) {
      firstRowHasZero = true;
      break;
    }
  }

  // Step 2: Check if first column has a zero
  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }

  // Step 3: Mark rows & columns using first row and column
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0; // Mark row
        matrix[0][j] = 0; // Mark column
      }
    }
  }

  // Step 4: Set elements to zero using markers
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // Step 5: Handle first row
  if (firstRowHasZero) {
    for (let j = 0; j < cols; j++) {
      matrix[0][j] = 0;
    }
  }

  // Step 6: Handle first column
  if (firstColHasZero) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0;
    }
  }
};

let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

setZeroes(matrix);
console.log(matrix);
