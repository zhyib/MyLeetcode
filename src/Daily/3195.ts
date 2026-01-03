function minimumArea(grid: number[][]): number {
  let rowMax = -1;
  let rowMin = Number.MAX_SAFE_INTEGER;
  let colMax = -1;
  let colMin = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        rowMax = Math.max(rowMax, i);
        rowMin = Math.min(rowMin, i);
        colMax = Math.max(colMax, j);
        colMin = Math.min(colMin, j);
      }
    }
  }
  return (rowMax - rowMin + 1) * (colMax - colMin + 1);
}
