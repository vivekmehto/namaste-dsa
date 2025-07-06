/* You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Examples
Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 – 1 = 5.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Constraints
1 <= prices.length <= 105
0 <= prices[i] <= 104 

Approach 
Initialize min as the first price.
Initialize maxProfit as 0.
Loop through the prices from index 1 to the end:
If the current price minus min is greater than maxProfit, update maxProfit.
If the current price is less than min, update min to this new lower value.
Return maxProfit at the end.
Dry Run

  prices = [7, 1, 5, 3, 6, 4]
  min = 7, maxProfit = 0
  
  i = 1 → prices[1] = 1
  1 < 7 → update min = 1
  
  i = 2 → prices[2] = 5
  5 - 1 = 4 > 0 → update maxProfit = 4
  
  i = 3 → prices[3] = 3
  3 - 1 = 2 < 4 → no change
  
  i = 4 → prices[4] = 6
  6 - 1 = 5 > 4 → update maxProfit = 5
  
  i = 5 → prices[5] = 4
  4 - 1 = 3 < 5 → no change
  
  ➡️ Final maxProfit = 5 ✅
    
Time and Space Complexity
Time Complexity: O(n)
One loop through the prices array.
Space Complexity: O(1)
Only a few variables used (min, maxProfit).  */






function sellStock(prices) {
      let min = prices[0];
      let maxProfit = 0;
      for (let i = 1; i < prices.length; i++) {
          if (prices[i] - min > maxProfit) {
              maxProfit = prices[i] - min;
          }
          if (prices[i] < min) {
              min = prices[i];
          }
      }
      return maxProfit;
  };
