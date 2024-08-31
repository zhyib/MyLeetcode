function minimumPossibleSum(n: number, target: number): number {
  let mod = 1e9 + 7;
  let ans = 0;
  let half = Math.floor(target / 2);
  let count = Math.min(half, n);
  ans += ((1 + count) * count) / 2;
  ans %= mod;
  let diff = n - count;
  if (diff > 0) {
    ans += (((2 * target + diff - 1) * diff) / 2) % mod;
  }
  return ans % mod;
}

minimumPossibleSum(39636, 49035);
