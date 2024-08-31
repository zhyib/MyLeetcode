function findMinHeightTrees(n: number, edges: number[][]): number[] {
  const ans = [];
  if (n === 1) {
    ans.push(0);
    return ans;
  }
  const degree = new Array(n).fill(0);
  const adj = new Array(n).fill(0).map(() => new Array());
  for (const edge of edges) {
    adj[edge[0]].push(edge[1]);
    adj[edge[1]].push(edge[0]);
    degree[edge[0]]++;
    degree[edge[1]]++;
  }
  const queue = [];
  for (let i = 0; i < n; i++) {
    if (degree[i] === 1) {
      queue.push(i);
    }
  }
  let remainNodes = n;
  while (remainNodes > 2) {
    const sz = queue.length;
    remainNodes -= sz;
    for (let i = 0; i < sz; i++) {
      const curr = queue.shift();
      if (curr !== undefined) {
        for (const v of adj[curr]) {
          degree[v]--;
          if (degree[v] === 1) {
            queue.push(v);
          }
        }
      }
    }
  }
  return queue;
}
