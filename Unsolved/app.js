
// Buy Low, Sell High -- Starter Code


// Stock Prices
// var stockPrices = [1.32, 1.14, 1.45, 1.20, 1.34, 1.74, 1.18, 1.90, 1.1];
var stockPrices = [135, 34, 25, 22, 21, 4, 1];

// Your Biggest Profit function
var biggestProfit = function(stockArray, sharesBought) {

    // determine the biggest profit possible during that period if stock bought lowest price and sold at the highest.

    if (stockArray.length > 2) {

        // Set initial minPrice, you cant buy any earlier than the first value
        
        var minPrice = stockArray[0];

        // Set initial max profit, your first opportunity to sell is the second number
        var maxProfit = stockArray[1] - stockArray[0];

        // Loops over the array, skipping the first value, since its already the minPrice and we can't sell when we buy
        
        for (let i = 1; i < stockArray.length; i++) {

            var currentPrice = stockArray[i];

            var potentialProfit = currentPrice - minPrice;

            // if maximumProfit is less than potentialProfit update the maximumProfit

            
            if (maxProfit < potentialProfit) {

                maxProfit = potentialProfit;

            }
            
            if (minPrice > currentPrice) {

                minPrice = currentPrice;
            } 
        }

        // multiply the maximumProfit by the number of shares to get the total
       return maxProfit * sharesBought;
    }
    else {
        console.log("Need to have at lease 2 prices")
    }
    
}

// A Call to your Biggest Profit function.
// biggestProfit(stockPrices, 10000);

console.log(biggestProfit(stockPrices, 10000))

// NOTE: This should return 7600,
// because you could have bought it at 1.14 per share
// and then sold it at 1.90 per share.
// 1.90 - 1.14 = 0.76. 0.76 * 10000 is 7600.