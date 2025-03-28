function findJudge(n: number, trust: number[][]): number {
  const inDegrees = new Array(n + 1).fill(0);
  const outDegrees = new Array(n + 1).fill(0);
  for (const edge of trust) {
    const [x, y] = edge;
    inDegrees[y]++;
    outDegrees[x]++;
  }
  for (let i = 1; i <= n; ++i) {
    if (inDegrees[i] === n - 1 && outDegrees[i] === 0) {
      return i;
    }
  }
  return -1;
}
