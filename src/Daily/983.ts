function mincostTickets(days: number[], costs: number[]): number {
  let dp = new Array(366).fill(0);
  let max = Math.max(...days);
  for (let i = 1; i <= max; i++) {
    if (days.includes(i)) {
      if (i < 7) {
        dp[i] = Math.min(dp[i - 1] + costs[0], costs[1], costs[2]);
      } else if (i < 30) {
        dp[i] = Math.min(dp[i - 1] + costs[0], dp[i - 7] + costs[1], costs[2]);
      } else {
        dp[i] = Math.min(dp[i - 1] + costs[0], dp[i - 7] + costs[1], dp[i - 30] + costs[2]);
      }
    } else {
      dp[i] = dp[i - 1];
    }
  }
  return dp[max];
}
mincostTickets([1, 4, 6, 7, 8, 20], [7, 2, 15]);
