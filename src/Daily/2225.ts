function findWinners(matches: number[][]): number[][] {
  const map = new Map<number, number>();
  for (const [winner, loser] of matches) {
    map.set(winner, (map.get(winner) ?? 0) + 0);
    map.set(loser, (map.get(loser) ?? 0) + 1);
  }
  const ans: number[][] = [[], []];
  for (const [key, value] of map) {
    if (value === 0) {
      ans[0].push(key);
    } else if (value === 1) {
      ans[1].push(key);
    }
  }
  ans[0].sort((a, b) => a - b);
  ans[1].sort((a, b) => a - b);
  return ans;
}
