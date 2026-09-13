function sortMatrix(grid: number[][]): number[][] {
  const m = grid.length;
  const n = grid[0].length;
  const ans: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 1; i < m + n; i++) {
    const minJ = Math.max(n - i, 0);
    const maxJ = Math.min(m + n - i - 1, n - 1);
    const arr: number[] = [];
    for (let j = minJ; j <= maxJ; j++) {
      arr.push(grid[i + j - n][j]);
    }
    if (minJ > 0) {
      arr.sort((a, b) => a - b);
    } else {
      arr.sort((a, b) => b - a);
    }
    for (let j = minJ; j <= maxJ; j++) {
      ans[i + j - n][j] = arr[j - minJ];
    }
  }
  return ans;
};
