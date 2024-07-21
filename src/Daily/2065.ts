function maximalPathQuality(
  values: number[],
  edges: number[][],
  maxTime: number
): number {
  const n = values.length;
  const g: number[][][] = Array.from({ length: n }, () => []);
  for (const [x, y, t] of edges) {
    g[x].push([y, t]);
    g[y].push([x, t]);
  }

  let ans = 0;
  const vis = Array(n).fill(false);
  vis[0] = true;``
  function dfs(x: number, sumTime: number, sumValue: number) {
    if (x === 0) {
      ans = Math.max(ans, sumValue);
    }
    for (const [y, t] of g[x]) {
      if (sumTime + t > maxTime) {
        continue;
      }
      if (vis[y]) {
        dfs(y, sumTime + t, sumValue);
      } else {
        vis[y] = true;
        dfs(y, sumTime + t, sumValue + values[y]);
        vis[y] = false;
      }
    }
  }
  dfs(0, 0, values[0]);
  return ans;
}
