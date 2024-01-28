function flowerGame(n: number, m: number): number {
  let ans = 0;
  ans += Math.floor((n + 1) / 2) * Math.floor(m / 2);
  ans += Math.floor((m + 1) / 2) * Math.floor(n / 2);
  return ans;
}
