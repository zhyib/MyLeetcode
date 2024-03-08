function findRotateSteps(ring: string, key: string): number {
  function getIdx(str: string, v: number) {
    return (str.codePointAt(v) as number) - 97;
  }

  const n = ring.length;
  const m = key.length;
  const pos = new Array<number[]>(26).fill([]).map((v) => new Array<number>());
  // 记录每个字母在ring中的位置
  for (let i = 0; i < n; ++i) {
    pos[getIdx(ring, i)].push(i);
  }
  const dp = new Array<number[]>(m)
    .fill([])
    .map((v) => new Array<number>(n).fill(Number.MAX_SAFE_INTEGER));
  for (const i of pos[getIdx(key, 0)]) {
    dp[0][i] = Math.min(i, n - i) + 1;
  }
  for (let i = 1; i < m; ++i) {
    for (const j of pos[getIdx(key, i)]) {
      for (const k of pos[getIdx(key, i - 1)]) {
        dp[i][j] = Math.min(
          dp[i][j],
          dp[i - 1][k] + Math.min(Math.abs(j - k), n - Math.abs(j - k)) + 1
        );
      }
    }
  }
  return Math.min(...dp[m - 1]);
}
