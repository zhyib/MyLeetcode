function splitArray(nums: number[], k: number): number {
  const n = nums.length;
  const f = new Array(n + 1)
    .fill(0)
    .map(() => new Array(k + 1).fill(Number.MAX_VALUE));
  const sub = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    sub[i + 1] = sub[i] + nums[i];
  }
  f[0][0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= Math.min(i, k); j++) {
      for (let kk = 0; kk < i; kk++) {
        f[i][j] = Math.min(f[i][j], Math.max(f[kk][j - 1], sub[i] - sub[kk]));
      }
    }
  }
  return f[n][k];
}
