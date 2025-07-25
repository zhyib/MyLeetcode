function minimumScore(nums: number[], edges: number[][]): number {
  let clock = 0;

  const n = nums.length;
  const graph: number[][] = new Array(n).fill(0).map(() => new Array());
  for (const e of edges) {
    const x = e[0];
    const y = e[1];
    graph[x].push(y);
    graph[y].push(x);
  }

  const xor = new Array(n);
  const inn = new Array(n);
  const out = new Array(n);
  function dfs(x: number, parent: number) {
    inn[x] = ++clock; // 递
    xor[x] = nums[x];
    for (const y of graph[x]) {
      if (y !== parent) {
        dfs(y, x);
        xor[x] ^= xor[y];
      }
    }
    out[x] = clock; // 归
  }

  dfs(0, -1);

  // 判断 x 是否为 y 的祖先
  function isAncestor(x: number, y: number) {
    return inn[x] < inn[y] && inn[y] <= out[x];
  }

  let ans = Number.MAX_VALUE;
  // 枚举：删除 x 与 x 父节点之间的边，删除 y 与 y 父节点之间的边
  for (let x = 2; x < n; x++) {
    for (let y = 1; y < x; y++) {
      let a, b, c;
      if (isAncestor(x, y)) {
        // x 是 y 的祖先
        a = xor[y];
        b = xor[x] ^ a;
        c = xor[0] ^ xor[x];
      } else if (isAncestor(y, x)) {
        // y 是 x 的祖先
        a = xor[x];
        b = xor[y] ^ a;
        c = xor[0] ^ xor[y];
      } else {
        // x 和 y 分别属于两棵不相交的子树
        a = xor[x];
        b = xor[y];
        c = xor[0] ^ a ^ b;
      }
      ans = Math.min(ans, Math.max(a, b, c) - Math.min(a, b, c));
      if (ans === 0) {
        // 不可能变小
        return 0; // 提前返回
      }
    }
  }
  return ans;
}
