function minMalwareSpread(graph: number[][], initial: number[]): number {
  const set = new Set(initial);
  const visited = Array(graph.length).fill(false);
  let nodeId = 0;
  let size = 0;
  function dfs(x: number) {
    visited[x] = true;
    size++;
    // 按照状态机更新 nodeId
    if (nodeId !== -2 && set.has(x)) {
      nodeId = nodeId === -1 ? x : -2;
    }
    for (let y = 0; y < graph[x].length; y++) {
      if (graph[x][y] === 1 && !visited[y]) {
        dfs(y);
      }
    }
  }

  let ans = -1;
  let maxSize = 0;
  for (const x of initial) {
    if (visited[x]) {
      continue;
    }
    nodeId = -1;
    size = 0;
    // 遍历每个联通区块
    dfs(x);
    if (nodeId >= 0 && (size > maxSize || (size === maxSize && nodeId < ans))) {
      // 如果存在且面积更大
      ans = nodeId;
      maxSize = size;
    }
  }
  return ans < 0 ? Math.min(...initial) : ans;
}
