function numberOfSubmatrices(grid: string[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const dp: number[][][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      dp[i][j] = [0, 0];
    }
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j][0] =
        dp[i - 1][j][0] +
        dp[i][j - 1][0] -
        dp[i - 1][j - 1][0] +
        (grid[i - 1][j - 1] === "X" ? 1 : 0);
      dp[i][j][1] =
        dp[i - 1][j][1] +
        dp[i][j - 1][1] -
        dp[i - 1][j - 1][1] +
        (grid[i - 1][j - 1] === "Y" ? 1 : 0);
    }
  }

  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let x = dp[i + 1][j + 1][0];
      let y = dp[i + 1][j + 1][1];
      if (x !== 0 && x === y) {
        ans += 1;
      }
    }
  }
  return ans;
}

numberOfSubmatrices([
  ["X", "X"],
  ["X", "Y"],
]);
