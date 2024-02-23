function validPartition(nums: number[]): boolean {
  const n = nums.length;
  const dp = Array(n + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i < n; i++) {
    if (
      (dp[i - 1] && nums[i] === nums[i - 1]) ||
      (i > 1 &&
        dp[i - 2] &&
        ((nums[i] === nums[i - 1] && nums[i] === nums[i - 2]) ||
          (nums[i] === nums[i - 1] + 1 && nums[i] === nums[i - 2] + 2)))
    ) {
      dp[i + 1] = true;
    }
  }
  return dp[n];
}
