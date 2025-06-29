/*
56. Merge Intervals
-------------------
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the 
non-overlapping intervals that cover all the intervals in the input.

Example 1:
----------
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:
----------
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:
-----------
1 <= intervals.length <= 104            
intervals[i].length == 2
0 <= starti <= endi <= 104             */

const mergeIntervals = (intervals) => {
  if (intervals.length === 0) return [];
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [];

  for (const interval of intervals) {
    let lastInterval = result[result.length - 1];
    if (!lastInterval || lastInterval[1] < interval[0]) {
      result.push(interval);
    } else {
      lastInterval[1] = Math.max(lastInterval[1], interval[1]);
    }
  }

  return result;
};

//  Test Cases
console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); // Output: [[1,6],[8,10],[15,18]]

console.log(
  mergeIntervals([
    [1, 4],
    [4, 5],
  ])
); // Output: [[1,5]]

console.log(
  mergeIntervals([
    [6, 8],
    [1, 9],
    [2, 4],
    [4, 7],
  ])
); // Output: [[1,9]]
