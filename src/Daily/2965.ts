function findMissingAndRepeatedValues(grid: number[][]): number[] {
  const n = grid.length;
  const total = ((1 + n * n) * n * n) / 2;
  let sum = 0;
  const arr = new Array<boolean>(n * n).fill(false);
  let dup = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sum += grid[i][j];
      if (arr[grid[i][j] - 1]) {
        dup = grid[i][j];
      } else {
        arr[grid[i][j] - 1] = true;
      }
    }
  }
  return [dup, -sum + total + dup];
}
