function minMalwareSpread(graph: number[][], initial: number[]): number {
  const n = graph.length;
  const visited = new Array(n).fill(false);
  initial.forEach((node) => (visited[node] = true));
  const pure: number[] = [];
  visited.forEach((item, index) => {
    if (item === false) {
      pure.push(index);
    }
  });

  let nodes = new Array(n).fill(0);
  let lastInfected = 0;
  let infected = new Set<number>();

  function dfs(node: number) {
    if (visited[node]) {
      return 0;
    }
    visited[node] = true;
    let sum = 1;
    for (let i = 0; i < n; i++) {
      if (graph[node][i] === 1) {
        if (visited[i] === false) {
          sum += dfs(i);
        } else if (initial.includes(i)) {
          lastInfected = i;
          infected.add(i);
        }
      }
    }
    return sum;
  }

  for (let i = 0; i < pure.length; i++) {
    infected = new Set<number>();
    lastInfected = -1;
    const last = dfs(pure[i]);
    if (infected.size === 1) {
      nodes[lastInfected] += last;
    }
  }

  let max = 0;
  let maxIndex = -1;
  nodes.forEach((nodeCount, index) => {
    if (nodeCount > max) {
      maxIndex = index;
      max = nodeCount;
    }
  });
  return max === 0 ? Math.min(...initial) : maxIndex;
}

minMalwareSpread(
  [
    [1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 1, 0, 1, 1, 1, 0, 0, 1],
  ],
  [8, 4, 2, 0]
);
