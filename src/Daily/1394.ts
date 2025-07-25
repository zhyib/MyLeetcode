function findLucky(arr: number[]): number {
  const map: Record<number, number> = {};
  arr.forEach((item) => {
    if (map[item]) {
      map[item] += 1;
    } else {
      map[item] = 1;
    }
  });

  let ans = -1;
  for (const [x, c] of Object.entries(map)) {
    if (Number(x) === c) {
      ans = Math.max(ans, Number(x));
    }
  }
  return ans;
}
