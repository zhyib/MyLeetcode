function maximumDetonation(bombs: number[][]) {
  const n = bombs.length;
  // 判断炸弹 u 能否引爆炸弹 v
  const isConnected = (u: number, v: number): boolean => {
    const dx = bombs[u][0] - bombs[v][0];
    const dy = bombs[u][1] - bombs[v][1];
    return bombs[u][2] * bombs[u][2] >= dx * dx + dy * dy;
  };

  // 维护引爆关系有向图
  const edges: Map<number, number[]> = new Map();
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i !== j && isConnected(i, j)) {
        if (!edges.has(i)) edges.set(i, []);
        edges.get(i)!.push(j);
      }
    }
  }
  let res = 0; // 最多引爆数量
  for (let i = 0; i < n; ++i) {
    // 遍历每个炸弹，广度优先搜索计算该炸弹可引爆的数量，并维护最大值
    const visited = Array(n).fill(0);
    let count = 1;
    const q = [i];
    visited[i] = 1;
    while (q.length > 0) {
      const curr = q.shift()!;
      for (const next of edges.get(curr) || []) {
        if (visited[next]) continue;
        ++count;
        q.push(next);
        visited[next] = 1;
      }
    }
    res = Math.max(res, count);
  }
  return res;
}
