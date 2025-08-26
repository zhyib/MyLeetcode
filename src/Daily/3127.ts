function canMakeSquare(grid: string[][]): boolean {
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      let map: Record<string, number> = { W: 0, B: 0 };
      map[grid[i][j]]++;
      map[grid[i][j + 1]]++;
      map[grid[i + 1][j]]++;
      map[grid[i + 1][j + 1]]++;
      if (map.B >= 3 || map.W >= 3) {
        return true;
      }
    }
  }
  return false;
}

canMakeSquare([
  ["B", "W", "B"],
  ["B", "W", "W"],
  ["B", "W", "B"],
]);
