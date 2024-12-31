function paintWalls(cost: number[], time: number[]): number {
  let n: number = cost.length;
  let f: number[] = new Array(n + 2).fill(Number.MAX_SAFE_INTEGER / 2);
  f[0] = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = n + 1; j >= 0; --j) {
      f[Math.min(j + time[i], n) + 1] = Math.min(
        f[Math.min(j + time[i], n) + 1],
        f[j] + cost[i]
      );
    }
  }
  return Math.min(f[n], f[n + 1]);
}
