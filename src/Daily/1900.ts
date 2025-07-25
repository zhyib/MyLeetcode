function earliestAndLatest(
  n: number,
  firstPlayer: number,
  secondPlayer: number
): number[] {
  const memo: Record<string, [number, number]> = {};

  const dfs = (n: number, first: number, second: number): [number, number] => {
    if (first + second === n + 1) {
      return [1, 1];
    }

    if (first + second > n + 1) {
      const temp = first;
      first = n - second + 1;
      second = n - temp + 1;
    }

    if (memo[`${n},${first},${second}`]) {
      return memo[`${n},${first},${second}`];
    }

    const m = Math.floor((n + 1) / 2);
    const minMid = second <= m ? 0 : second - Math.floor(n / 2) - 1;
    const maxMid = second <= m ? second - first - 1 : m - first - 1;
    let min = Number.MAX_SAFE_INTEGER;
    let max = 0;

    for (let left = 0; left < first; left++) {
      for (let mid = minMid; mid <= maxMid; mid++) {
        const res = dfs(m, left + 1, left + mid + 2);
        min = Math.min(min, res[0]);
        max = Math.max(max, res[1]);
      }
    }
    memo[`${n},${first},${second}`] = [min + 1, max + 1];
    return [min + 1, max + 1];
  };

  return dfs(n, firstPlayer, secondPlayer);
}

earliestAndLatest(11, 2, 4);
