function maxCoins(nums: number[]): number {
  const n = nums.length;
  const dp = new Array(n + 2).fill(0).map(() => new Array(n + 2).fill(0));
  const val = new Array(n + 2).fill(0);
  val[0] = 1;
  val[n + 1] = 1;
  for (let i = 1; i <= n; i++) {
    val[i] = nums[i - 1];
  }
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 2; j <= n + 1; j++) {
      for (let k = i + 1; k < j; k++) {
        let sum = val[i] * val[k] * val[j];
        sum += dp[i][k] + dp[k][j];
        dp[i][j] = Math.max(dp[i][j], sum);
      }
    }
  }
  return dp[0][n + 1];
}
