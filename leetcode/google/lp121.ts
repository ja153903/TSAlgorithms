export default function maxProfit(prices: number[]): number {
  let minBuy = prices[0];
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
    minBuy = Math.min(minBuy, prices[i]);
    max = Math.max(max, prices[i] - minBuy);
  }

  return max;
}

