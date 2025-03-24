function maxStrength(nums: number[]): number {
  let ans = nums[0];
  let max = ans;
  let min = ans;
  for (let i = 1; i < nums.length; i++) {
    const tmp = max;
    max = Math.max(max, nums[i], max * nums[i], min * nums[i]);
    min = Math.min(min, nums[i], tmp * nums[i], min * nums[i]);
  }
  return Math.max(min, ans, max);
}
