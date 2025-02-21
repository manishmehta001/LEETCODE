/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.


-----------------------------------------------------------------------------------------------
1. Understand the problem:-
--------------------------
=> the problem says that find the minimim two value of given array, and return sum of two lowest number.....
=> the thing is how to find second lowest number 

2.Breaking into sub-problem:-
----------------------------
1. before looping every element of array we can set the first value of array is min
2. then we iterate over the array and campare each element of array to max. 
3. if elemet of array is less then to max then we set the value of max is current element of array
4. this process will continue until the loop end.
*/

function sumTwoSmallestNumbers(numbers) {
  let min = Infinity;
  let secondMin = Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      secondMin = min; // Purana min ab secondMin ban gaya
      min = numbers[i]; // Naya min update kar diya
    } else if (numbers[i] < secondMin) {
      secondMin = numbers[i]; // Sirf agar min se bada ho tabhi update hoga
    }
  }

  return min + secondMin;
}

//-----------------------------------------------------------------------------------------
function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers[0] + numbers[1];
}

//--------------------------------------------------------------------------------------------
function sumTwoSmallestNumbers(numbers) {
  var [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}

//----------------------------------------------------------------------------------------------
const sumTwoSmallestNumbers = (numbers) =>
  numbers
    .sort((x, y) => x - y)
    .slice(0, 2)
    .reduce((x, y) => x + y);

// ✅ Test Cases
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); // Output: 7
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])); // Output: 3453455
console.log(sumTwoSmallestNumbers([8, 3, 1, 6, 4])); // Output: 4
console.log(sumTwoSmallestNumbers([5, 5, 3, 1])); // Output: 4
