function findLHS(nums: number[]): number {
  const map: Record<string, number> = {};
  nums.forEach((num) => {
    map[num] = map[num] ? map[num] + 1 : 1;
  });
  return Object.keys(map).reduce((pre, cur) => {
    const count = map[cur];
    if (map[Number(cur) + 1]) {
      pre = Math.max(pre, count + map[Number(cur) + 1]);
    }
    return pre;
  }, 0);
}

findLHS([1, 3, 2, 2, 5, 2, 3, 7]);
