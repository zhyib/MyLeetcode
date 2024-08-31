function minimumVisitedCells(grid: number[][]): number {
  const m = grid.length,
    n = grid[0].length;
  const dist = new Array(m).fill(0).map(() => new Array(n).fill(-1));
  dist[0][0] = 1;
  const row = new Array(m).fill(0).map(() => new MinPriorityQueue());
  const col = new Array(n).fill(0).map(() => new MinPriorityQueue());

  const update = (x, y) => {
    if (x === -1 || y < x) {
      return y;
    }
    return x;
  };

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      while (
        !row[i].isEmpty() &&
        row[i].front().element[1] + grid[i][row[i].front().element[1]] < j
      ) {
        row[i].dequeue();
      }
      if (!row[i].isEmpty()) {
        dist[i][j] = update(dist[i][j], dist[i][row[i].front().element[1]] + 1);
      }

      while (
        !col[j].isEmpty() &&
        col[j].front().element[1] + grid[col[j].front().element[1]][j] < i
      ) {
        col[j].dequeue();
      }
      if (!col[j].isEmpty()) {
        dist[i][j] = update(dist[i][j], dist[col[j].front().element[1]][j] + 1);
      }

      if (dist[i][j] !== -1) {
        row[i].enqueue([dist[i][j], j], dist[i][j]);
        col[j].enqueue([dist[i][j], i], dist[i][j]);
      }
    }
  }
  return dist[m - 1][n - 1];
}
