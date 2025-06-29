/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104



solution==> */

const maxProfit = (prices) => {
  const findDayWisePrice = [];
  prices.forEach((price, day) => {
    findDayWisePrice.push({ day: day, price: price });
  });
  console.log(findDayWisePrice);
  let minPriceObj = findDayWisePrice[0];
  let maxPriceObj = findDayWisePrice[0];
  let maxProfit = 0;

  findDayWisePrice.forEach((obj) => {
    // Update minPriceObj if a lower price is found
    if (obj.price < minPriceObj.price) {
      minPriceObj = obj;
    }

    // Only consider maxPriceObj after finding minPriceObj
    if (obj.day > minPriceObj.day) {
      // Check if this price would result in a higher profit
      let profit = obj.price - minPriceObj.price;
      if (profit > maxProfit) {
        maxProfit = profit;
        // Update maxPriceObj
        maxPriceObj = obj;
      }
    }
  });
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

//=================================================================================

var maxProfit1 = function (prices) {
  let buy = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    } else if (prices[i] - buy > profit) {
      profit = prices[i] - buy;
    }
  }
  return profit;
};

console.log(maxProfit1([7, 1, 5, 3, 6, 4]));
