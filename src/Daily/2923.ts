function findChampion(grid: number[][]): number {
  const sum = grid.map((team) => team.reduce((pre, cur) => pre + cur), 0);
  return sum.indexOf(Math.max(...sum));
}
