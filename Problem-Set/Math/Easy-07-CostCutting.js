/*
Fast & Furious Driving School's (F&F) charges for lessons are as below:

Time	                        Cost
-------------------------------------
Up to 1st hour	                $30
Every subsequent half hour**	$10

** Subsequent charges are calculated by rounding up to nearest half hour.
For example, if student X has a lesson for 1hr 20 minutes, he will be charged $40 (30+10) for 1 hr 30 mins and if he has a lesson 
for 5 minutes, he will be charged $30 for the full hour.

Out of the kindness of its heart, F&F also provides a 5 minutes grace period. So, if student X were to have a lesson for 65 
minutes or 1 hr 35 mins, he will only have to pay for an hour or 1hr 30 minutes respectively.

For a given lesson time in minutes (min) , write a function cost to calculate how much the lesson costs. Input is always > 0.
*/

function cost(min) {
  if (min <= 60) return 30;

  let extraTime = min - 60;

  if (extraTime <= 5) return 30;

  extraTime = extraTime - 5;

  let extraHalfHoure = Math.ceil(extraTime / 30);

  return 30 + extraHalfHoure * 10;
}

// ✅ **Test Cases**
console.log(cost(5)); // 30
console.log(cost(60)); // 30
console.log(cost(61)); // 30 (grace period)
console.log(cost(65)); // 30 (grace period)
console.log(cost(66)); // 40 (round up to 90 min)
console.log(cost(90)); // 40
console.log(cost(95)); // 40 (grace period)
console.log(cost(96)); // 50 (rounded up to 120 min)
console.log(cost(120)); // 50
