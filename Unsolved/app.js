
// Buy Low, Sell High -- Starter Code


// Stock Prices
var stockPrices = [1.32, 1.14, 1.45, 1.20, 1.34, 1.74, 1.18, 1.90, 1.1];

// Your Biggest Profit function
var biggestProfit = function(stockArray, sharesBought) {

    // determine the biggest profit possible during that period if stock bought lowest price and sold at the highest.

    if (stockArray.length > 2) {

        // Set initial minPrice, you cant buy any earlier than the first value
        
        var minimumPrice = stockArray[0];

        // Set initial max profit, your first opportunity to sell is the second number
        var maximumProfit = stockArray[1] -  stockArray[0];

        // Loops over the array, skipping the first value, since its already the minPrice and we can't sell when we buy
        for (let i = 1; i < stockArray.length; i++);
    };
    
    
}

// A Call to your Biggest Profit function.
biggestProfit(stockPrices, 10000);

// NOTE: This should return 7600,
// because you could have bought it at 1.14 per share
// and then sold it at 1.90 per share.
// 1.90 - 1.14 = 0.76. 0.76 * 10000 is 7600.