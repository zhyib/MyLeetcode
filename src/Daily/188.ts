function maxProfit(k: number, prices: number[]): number {
  const buy: Array<number[]> = new Array(prices.length)
    .fill([0])
    .map(() => new Array(k + 1).fill(0));
  const sell: Array<number[]> = new Array(prices.length)
    .fill([0])
    .map(() => new Array(k + 1).fill(0));
  buy[0] = new Array(k + 1).fill(-prices[0]);

  for (let i = 1; i < prices.length; i++) {
    buy[i][0] = Math.max(buy[i - 1][0], sell[i - 1][0] - prices[i]);
    for (let j = 1; j <= k; j++) {
      buy[i][j] = Math.max(sell[i - 1][j] - prices[i], buy[i - 1][j]);
      sell[i][j] = Math.max(buy[i - 1][j - 1] + prices[i], sell[i - 1][j]);
    }
  }
  return Math.max(...sell[prices.length - 1]);
}

maxProfit(2, [2, 4, 1]);
