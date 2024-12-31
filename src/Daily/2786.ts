function maxScore(nums: number[], x: number): number {
  const n = nums.length;
  const dp = new Array(n + 1).fill(0).map(() => [0, 0]);
  for (let i = n - 1; i >= 0; i--) {
    const v = nums[i];
    const mod = v % 2;
    dp[i][mod ^ 1] = dp[i + 1][mod ^ 1]; // 异或 模数取反
    dp[i][mod] = Math.max(dp[i + 1][mod], dp[i + 1][mod ^ 1] - x) + v;
  }
  return dp[0][nums[0] % 2];
}
