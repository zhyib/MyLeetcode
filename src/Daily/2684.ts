function maxMoves(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  let max = 0;

  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 1; j < n; j++) {
    for (let i = 0; i < m; i++) {
      if (
        i !== 0 &&
        dp[i - 1][j - 1] !== 0 &&
        grid[i][j] > grid[i - 1][j - 1]
      ) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
      if (
        i !== m - 1 &&
        dp[i + 1][j - 1] !== 0 &&
        grid[i][j] > grid[i + 1][j - 1]
      ) {
        dp[i][j] = dp[i + 1][j - 1] + 1;
      }
      if (dp[i][j - 1] !== 0 && grid[i][j] > grid[i][j - 1]) {
        dp[i][j] = dp[i][j - 1] + 1;
      }
      max = Math.max(dp[i][j], max);
    }
  }
  return Math.max(max - 1, 0);
}

maxMoves([
  [187, 167, 209, 251, 152, 236, 263, 128, 135],
  [267, 249, 251, 285, 73, 204, 70, 207, 74],
  [189, 159, 235, 66, 84, 89, 153, 111, 189],
  [120, 81, 210, 7, 2, 231, 92, 128, 218],
  [193, 131, 244, 293, 284, 175, 226, 205, 245],
]);
