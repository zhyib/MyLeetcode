function minCost(basket1: number[], basket2: number[]): number {
  const map = new Map<number, number>();
  for (let i = 0; i < basket1.length; i++) {
    map.set(basket1[i], (map.get(basket1[i]) ?? 0) + 1);
    map.set(basket2[i], (map.get(basket2[i]) ?? 0) - 1);
  }

  let min = Number.MAX_SAFE_INTEGER;
  const b1: number[] = [];
  const b2: number[] = [];
  for (const [x, c] of map.entries()) {
    if (c % 2 !== 0) {
      return -1;
    }
    min = Math.min(min, x);
    if (c > 0) {
      // c/2 要移动的数量
      for (let i = 0; i < c / 2; i++) {
        b1.push(x);
      }
    } else {
      for (let i = 0; i < -c / 2; i++) {
        b2.push(x);
      }
    }
  }

  b1.sort((a, b) => a - b);
  b2.sort((a, b) => b - a);
  let ans = 0;
  for (let i = 0; i < b1.length; i++) {
    ans += Math.min(b1[i], b2[i], min * 2);
  }
  return ans;
}

minCost(
  [84, 80, 43, 8, 80, 88, 43, 14, 100, 88],
  [32, 32, 42, 68, 68, 100, 42, 84, 14, 8]
);
