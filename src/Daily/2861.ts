function maxNumberOfAlloys(
  n: number,
  k: number,
  budget: number,
  composition: number[][],
  stock: number[],
  cost: number[]
): number {
  let left = 0;
  let right = 2e8;
  let res = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let minCost = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < k; i++) {
      let nowCost = 0;
      for (let j = 0; j < n; j++) {
        nowCost += Math.max(composition[i][j] * (mid - stock[j]) * cost[j], 0);
      }
      minCost = Math.min(minCost, nowCost);
    }

    if (minCost > budget) {
      right = mid - 1;
    } else {
      left = mid + 1;
      res = mid;
    }
  }
  return res;
}

maxNumberOfAlloys(
  3,
  2,
  15,
  [
    [1, 1, 1],
    [1, 1, 10],
  ],
  [0, 0, 0],
  [1, 2, 3]
);
