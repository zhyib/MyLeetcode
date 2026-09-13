function maxFrequencyElements(nums: number[]): number {
  const map = new Map<number, number>();
  let ans = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = map.get(nums[i]) ?? 0;
    map.set(nums[i], num + 1);
    if (num + 1 > max) {
      max = num + 1;
      ans = max;
    } else if (num + 1 === max) {
      ans += max;
    }
  }
  return ans;
};

maxFrequencyElements([1, 2, 3, 4, 5]);
