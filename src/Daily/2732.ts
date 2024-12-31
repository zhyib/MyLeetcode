function goodSubsetofBinaryMatrix(grid: number[][]): number[] {
  const map: Record<number, number> = {};
  for (let i = 0; i < grid.length; i++) {
    let mask = 0;
    for (let j = 0; j < grid[i].length; j++) {
      mask |= grid[i][j] << j;
    }
    if (mask === 0) {
      return [i];
    }
    map[mask] = i;
  }

  const entries = Object.entries(map);
  for (const entry of entries) {
    for (const entry2 of entries) {
      if ((Number(entry[0]) & Number(entry2[0])) === 0) {
        const min = Math.min(entry[1], entry2[1]);
        const max = Math.max(entry[1], entry2[1]);
        return [min, max];
      }
    }
  }
  return [];
}
