function minimumOperations(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const freq: number[][][] = [];
  const map: Record<number, number>[] = new Array(n).fill(0).map(() => ({}));

  for (let i = 0; i < n; i++) {
    const temp = new Array(10).fill(0);
    for (let j = 0; j < m; j++) {
      temp[grid[j][i]] += 1;
    }
    const newTemp = temp.map((count, index) => [count, index]);
    newTemp.sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      } else {
        return b[0] - a[0];
      }
    });
    freq.push(newTemp);
  }

  function traverse(last: number, curr: number, index: number): number {
    if (index === n) {
      return 0;
    }
    let limit = 2;
    let min = Number.MAX_VALUE;
    for (let j = 0; j < limit; j++) {
      if (freq[index][j][1] === last) {
        limit += 1;
        continue;
      }
      if (map[index][freq[index][j][1]] === undefined) {
        const sum = traverse(
          freq[index][j][1],
          curr + (m - freq[index][j][0]),
          index + 1
        );
        map[index][freq[index][j][1]] = sum;
      }
      min = Math.min(
        min,
        m - freq[index][j][0] + map[index][freq[index][j][1]]
      );
    }
    return min;
  }
  const ans = traverse(-1, 0, 0);
  return ans;
}

minimumOperations([
  [4, 5, 0, 1],
  [1, 9, 0, 8],
  [2, 2, 5, 3],
  [2, 0, 9, 3],
]);
