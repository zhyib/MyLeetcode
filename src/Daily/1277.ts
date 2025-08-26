function countSquares(matrix: number[][]): number {
  const m = matrix.length;
  const n = matrix[0].length;
  const dp: number[][] = new Array(m + 1)
    .fill(0)
    .map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (matrix[i - 1][j - 1] === 1) {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }
  return dp.reduce((pre, cur) => pre + cur.reduce((a, b) => a + b, 0), 0);
}
