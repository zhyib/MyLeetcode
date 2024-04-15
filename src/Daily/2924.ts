function findChampion(n: number, edges: number[][]): number {
  const win: number[] = [];
  const lose = new Array(n).fill(false);
  edges.forEach((edge) => {
    lose[edge[1]] = true;
  });
  lose.forEach((team, index) => {
    if (team === false) {
      win.push(index);
    }
  });
  return win.length === 0 ? win[0] : -1;
}
