function stoneGameVII(stones: number[]): number {
  const n: number = stones.length;
  const sum: number[] = new Array(n + 1).fill(0);
  const dp: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    // sum[i] <= stone[0, i - 1]
    sum[i + 1] = sum[i] + stones[i];
  }
  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      // [i+1, j], [i, j-1] => [i][j]
      dp[i][j] = Math.max(
        sum[j + 1] - sum[i + 1] - dp[i + 1][j],
        sum[j] - sum[i] - dp[i][j - 1]
      );
    }
  }

  return dp[0][n - 1];
}
