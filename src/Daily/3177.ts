function maximumLength(nums: number[], k: number): number {
  const map = new Map<number, number[]>();
  let mx = new Array(k + 2).fill(0);
  for (const x of nums) {
    if (!map.has(x)) {
      map.set(x, new Array(k + 1).fill(0));
    }
    const f = map.get(x)!;
    for (let j = k; j >= 0; j--) {
      f[j] = Math.max(f[j], mx[j]) + 1;
      mx[j + 1] = Math.max(mx[j + 1], f[j]);
    }
  }
  return mx[k + 1];
}
