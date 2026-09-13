function sumFourDivisors(nums: number[]): number {
  const map = new Map<number, number>();
  const f = (x: number): number => {
    let cnt = 2;
    let s = x + 1;
    for (let i = 2; i * i <= x; ++i) {
      if (x % i === 0) {
        ++cnt;
        s += i;
        if (i * i !== x) {
          ++cnt;
          s += Math.floor(x / i);
        }
      }
    }
    return cnt === 4 ? s : 0;
  };

  let ans = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (map.has(nums[i])) {
      ans += map.get(nums[i])!;
    } else {
      const val = f(nums[i]);
      map.set(nums[i], val);
      ans += val;
    }
  }
  return ans;
}
