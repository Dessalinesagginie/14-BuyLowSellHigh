Bonuses
1. Put in validation so that there are at least 3 stock prices in the array
2. Consider case when the stock goes down every moment
3. You would want to return the minimum negative profit.
4. For example, if you bought at $22 and sold at $21, you would lose $1 per share. That's the best case scenario if 
    you had to buy and sell this stock within an hour.
5. Example:
[135, 34, 25, 22, 21, 4, 1];

Starter Code
var iagStockPrices = [1.32, 1.14, 1.45, 1.20, 1.34, 1.74, 1.18, 1.90, 1.1];

var biggestProfit = function(stockArray, sharesBought){
  // your code goes here
};

biggestProfit(iagStockPrices, 10000); // this should return 7600, because you could have bought it at 1.14 per share and then sold it at 1.90 per share. 1.90 - 1.14 = 0.76. 0.76 * 10000 is 7600.

Video Walkthrough
Link: https://youtu.be/iuC4vFhyWjM