function minimumArea(grid: number[][]): number {
  let top = 0;
  let bottom = 0;
  let left = 0;
  let right = 0;

  for (let i = 0; i < grid.length; i++) {
    let sum = grid[i].reduce((prev, curr) => prev + curr, 0);
    if (sum >= 1) {
      top = i;
      break;
    }
  }

  for (let i = grid.length - 1; i >= 0; i--) {
    let sum = grid[i].reduce((prev, curr) => prev + curr, 0);
    if (sum >= 1) {
      bottom = i;
      break;
    }
  }

  for (let i = 0; i < grid[0].length; i++) {
    let sum = 0;
    for (let j = 0; j < grid.length; j++) {
      sum += grid[j][i];
    }
    if (sum >= 1) {
      left = i;
      break;
    }
  }

  for (let i = grid[0].length - 1; i >= 0; i--) {
    let sum = 0;
    for (let j = 0; j < grid.length; j++) {
      sum += grid[j][i];
    }
    if (sum >= 1) {
      right = i;
      break;
    }
  }

  return (right - left + 1) * (bottom - top + 1);
}

minimumArea([
  [0, 1, 0],
  [1, 0, 1],
]);
