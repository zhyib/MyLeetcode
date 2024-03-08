function minimumSeconds(nums: number[]): number {
  const map: Record<number, number[]> = {};
  nums.forEach((num, index) => {
    if (map[num]) {
      map[num].push(index);
    } else {
      map[num] = [index];
    }
  });
  let min = Number.MAX_SAFE_INTEGER;
  Object.values(map).forEach((val) => {
    let max = val[0] - val[val.length - 1] + nums.length;
    for (let i = 1; i < val.length; i++) {
      max = Math.max(max, val[i] - val[i - 1]);
    }
    min = Math.min(min, max);
  });
  return Math.floor(min / 2);
}
