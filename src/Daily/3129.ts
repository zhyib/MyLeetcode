function numberOfStableArrays(zero: number, one: number, limit: number): number {
  const MOD = 1e9 + 7;
  const z = Math.min(limit, zero);
  const o = Math.min(limit, one);
  const f: number[][][] = new Array(zero + 1)
    .fill(0)
    .map(() => new Array(one + 1).fill(0).map(() => new Array(2).fill(0)));
  for (let i = 1; i <= z; i++) {
    f[i][0][0] = 1;
  }
  for (let j = 1; j <= o; j++) {
    f[0][j][1] = 1;
  }
  for (let i = 1; i <= zero; i++) {
    for (let j = 1; j <= one; j++) {
      // + MOD 保证答案非负
      f[i][j][0] =
        (f[i - 1][j][0] + f[i - 1][j][1] + (i > limit ? MOD - f[i - limit - 1][j][1] : 0)) % MOD;
      f[i][j][1] =
        (f[i][j - 1][0] + f[i][j - 1][1] + (j > limit ? MOD - f[i][j - limit - 1][0] : 0)) % MOD;
    }
  }
  return (f[zero][one][0] + f[zero][one][1]) % MOD;
}
