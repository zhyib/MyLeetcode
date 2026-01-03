function numOfWays(n: number): number {
  let ABC = 6;
  let ABA = 6;
  const MOD = 1e9 + 7;
  for (let i = 1; i < n; i++) {
    const newABC = (2 * ABC + 2 * ABA) % MOD;
    const newABA = (2 * ABC + 3 * ABA) % MOD;
    ABC = newABC;
    ABA = newABA;
  }
  return (ABA + ABC) % MOD;
};
