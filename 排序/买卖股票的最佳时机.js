// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let num = 0;
    for (let i = 1; i < prices.length; i++) {
        if(prices[i] > prices[i -1]){
            num+= prices[i] - prices[i -1]
        }
    }
    return num
};
