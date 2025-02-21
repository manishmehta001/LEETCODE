/*
Given an array arr[], its starting position l and its ending position r. Sort the array using the merge sort algorithm.

Examples:

Input: arr[] = [4, 1, 3, 9, 7]
Output: [1, 3, 4, 7, 9]

Input: arr[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Input: arr[] = [1, 3 , 2]
Output: [1, 2, 3]

Constraints:
1 <= arr.size() <= 105
1 <= arr[i] <= 105

*/

const merge = (array1, array2) => {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    result.push(array1[i]);
    i++;
  }

  while (j < array2.length) {
    result.push(array2[j]);
    j++;
  }

  return result;
};

const mergeSort = (array) => {
  if (array.length === 1) {
    return array;
  }

  let mid = Math.floor(array.length / 2);

  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));

  return merge(left, right);
};

console.log(mergeSort([8528, 9208, 808]));
