function getAncestors(n: number, edges: number[][]): number[][] {
  const ans = new Array(n).fill(null).map(() => new Set<number>());
  const maxtrix: number[][] = new Array(n)
    .fill(null)
    .map(() => new Array<number>());
  const inDeg: number[] = new Array(n).fill(0);
  edges.forEach((edge) => {
    maxtrix[edge[0]].push(edge[1]);
    inDeg[edge[1]] += 1;
  });
  const nodes: number[] = [];
  for (let i = 0; i < n; i++) {
    if (inDeg[i] === 0) {
      nodes.push(i);
    }
  }
  while (nodes.length !== 0) {
    const start = nodes.shift() as number;
    for (const end of maxtrix[start]) {
      ans[end].add(start);
      for (const node of ans[start]) {
        ans[end].add(node);
      }
      inDeg[end] -= 1;
      if (inDeg[end] === 0) {
        nodes.push(end);
      }
    }
  }
  return ans.map((item) => Array.from(item).sort((a, b) => a - b));
}
