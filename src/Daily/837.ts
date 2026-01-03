function new21Game(n: number, k: number, maxPts: number): number {
  const dp = new Array(n + 1).fill(0);
  let s = 0;
  for (let i = n; i >= 0; i--) {
    dp[i] = i >= k ? 1 : s / maxPts;
    s += dp[i];
    if (n - maxPts >= i) {
      s -= dp[i + maxPts];
    }
  }
  return dp[0];
}
