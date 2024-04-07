function minimumAddedCoins(coins: number[], target: number): number {
  coins.sort((a, b) => a - b);
  let ans = 0;
  let curr = 1;
  let i = 0;
  while (curr <= target) {
    if (i === coins.length || curr < coins[i]) {
      ans += 1;
      curr += curr;
    } else {
      while (curr >= coins[i]) {
        curr += coins[i];
        i += 1;
      }
    }
  }
  return ans;
}
