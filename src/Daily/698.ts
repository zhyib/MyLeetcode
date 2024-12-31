function canPartitionKSubsets(nums: number[], k: number): boolean {
  const all = nums.reduce((a, b) => a + b);
  if (all % k !== 0) {
    return false;
  }
  let per = all / k;
  nums.sort((a, b) => a - b);
  const n = nums.length;
  if (nums[n - 1] > per) {
    return false;
  }
  const dp = new Array(1 << n).fill(false);
  const curSum = new Array(1 << n).fill(0);
  dp[0] = true;
  for (let i = 0; i < 1 << n; i++) {
    if (!dp[i]) {
      continue;
    }
    for (let j = 0; j < n; j++) {
      if (curSum[i] + nums[j] > per) {
        break;
      }
      if (((i >> j) & 1) == 0) {
        let next = i | (1 << j);
        if (!dp[next]) {
          curSum[next] = (curSum[i] + nums[j]) % per;
          dp[next] = true;
        }
      }
    }
  }
  return dp[(1 << n) - 1];
}
