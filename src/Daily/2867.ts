// 埃氏筛
const N = 100001;
let isPrime = new Array(N).fill(true);
isPrime[1] = false;
for (let i = 2; i * i < N; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j < N; j += i) {
      isPrime[j] = false;
    }
  }
}

function countPaths(n: number, edges: number[][]): number {
  let G = new Array(n + 1).fill(null).map(() => []);
  for (const [i, j] of edges) {
    G[i].push(j);
    G[j].push(i);
  }

  function dfs(i, pre) {
    seen.push(i);
    for (const j of G[i]) {
      if (j !== pre && !isPrime[j]) {
        dfs(j, i);
      }
    }
  }

  let seen = [];
  let res = 0;
  let count = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    if (!isPrime[i]) {
      continue;
    }
    let cur = 0;
    for (const j of G[i]) {
      if (isPrime[j]) {
        continue;
      }
      if (count[j] === 0) {
        seen = [];
        dfs(j, 0);
        let cnt = seen.length;
        for (const k of seen) {
          count[k] = cnt;
        }
      }
      res += count[j] * cur;
      cur += count[j];
    }
    res += cur;
  }
  return res;
}
