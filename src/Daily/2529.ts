function maximumCount(nums: number[]): number {
  let pos = 0;
  let neg = 0;
  for (const num of nums) {
    if (num > 0) {
      pos++;
    } else if (num < 0) {
      neg++;
    }
  }
  return Math.max(pos, neg);
}
