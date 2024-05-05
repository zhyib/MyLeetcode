function combinationSum4(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  const dp = new Array(target + 1).fill(0).map(() => 0);
  let index = nums.length - 1;
  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
    while (i + nums[index] > target) {
      index -= 1;
      if (index < 0) {
        return 0;
      }
    }
    dp[i] = (index + 1) * dp[i - 1];
  }
  s;
  return dp[target];
}

combinationSum4([1, 2, 3], 4);
