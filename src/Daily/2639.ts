function findColumnWidth(grid: number[][]): number[] {
  let ans: number[] = [];
  let m = grid.length;
  let n = grid[0].length;

  for (let i = 0; i < n; i++) {
    let max = 0;
    for (let j = 0; j < m; j++) {
      max = Math.max(max, grid[j][i].toString().length);
    }
    ans.push(max);
  }
  return ans;
}
