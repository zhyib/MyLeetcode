function maxScore(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const dp = Array.from({ length: m }, () => Array<number>(n).fill(-1));
  let maxCol = new Array<number>(n).fill(0);
  for (let i = m - 1; i >= 0; i--) {
    let maxRow = 0;
    for (let j = n - 1; j >= 0; j--) {
      if (i === m - 1) {
        dp[i][j] = maxRow - grid[i][j];
      }
      if (j === n - 1) {
        dp[i][j] = maxCol[j] - grid[i][j];
      }
      if (i !== m - 1 && j !== n - 1) {
        dp[i][j] = Math.max(maxRow, maxCol[j]) - grid[i][j];
      }
      maxRow = Math.max(maxRow, grid[i][j] + Math.max(0, dp[i][j]));
      maxCol[j] = Math.max(maxCol[j], grid[i][j] + Math.max(0, dp[i][j]));
    }
  }

  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === m - 1 && j === n - 1) {
        continue;
      }
      max = Math.max(max, dp[i][j]);
    }
  }
  return max;
}
