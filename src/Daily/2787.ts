function numberOfWays(n: number, x: number): number {
  let mod = 1e9 + 7;
  const arr: number[] = new Array(n + 1).fill(0);
  arr[0] = 1;
  for (let i = 1; Math.pow(i, x) <= n; i++) {
    const v = Math.pow(i, x);
    for (let j = n; j >= v; j--) {
      arr[j] += arr[j - v];
    }
  }
  return arr[n] % mod;
}

numberOfWays(4, 1);
