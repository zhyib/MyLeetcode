function countWays(nums: number[]): number {
  let ans = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < i + 1 && nums[i + 1] > i + 1) {
      ans++;
    }
  }
  if (nums[0] > 0) {
    ans++;
  }
  if (nums[nums.length - 1] < nums.length) {
    ans++;
  }
  return ans;
}
