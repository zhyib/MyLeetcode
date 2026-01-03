function maxSubarrays(n: number, conflictingPairs: number[][]): number {
  const group: number[][] = new Array(n + 1).fill(0).map(() => new Array());
  for (const [u, v] of conflictingPairs) {
    group[Math.min(u, v)].push(Math.max(u, v));
  }

  let ans = 0;
  let maxExtra = 0;
  const extra = new Array(n + 2).fill(0);
  const b = new Array();
  let b0 = n + 1;
  let b1 = n + 1;

  for (let i = n; i >= 1; i--) {
    // const preB0 = b0;
    for (const b of group[i]) {
      if (b < b0) {
        b1 = b0;
        b0 = b;
      } else if (b < b1) {
        b1 = b;
      }
    }

    ans += b0 - i;
    extra[b0] += b1 - b0;
    maxExtra = Math.max(maxExtra, extra[b0]);
  }

  return ans + maxExtra;
}
