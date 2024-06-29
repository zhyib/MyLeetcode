function countPairsOfConnectableServers(
  edges: number[][],
  signalSpeed: number
): number[] {
  const n = edges.length + 1;
  const g = new Array(n).fill(0).map(() => new Array<number[]>());

  function dfs(child: number, parent: number, weight: number) {
    let count = weight % signalSpeed === 0 ? 1 : 0;
    for (const edge of g[child]) {
      if (edge[0] !== parent) {
        count += dfs(edge[0], child, edge[1]);
      }
    }
    return count;
  }

  for (const edge of edges) {
    const [x, y, w] = edge;
    g[x].push([y, w]);
    g[y].push([x, w]);
  }

  const ans: number[] = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (const edge of g[i]) {
      let count = dfs(edge[0], i, edge[1]);
      ans[i] += count * sum;
      sum += count;
    }
  }
  return ans;
}
