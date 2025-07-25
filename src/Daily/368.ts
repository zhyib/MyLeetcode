function largestDivisibleSubset(nums: number[]): number[] {
  nums.sort((a, b) => a - b);

  let n = nums.length;
  let dp = new Array(n).fill(0);
  let from = new Array(n).fill(-1);
  let maxIndex = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] == 0 && dp[j] > dp[i]) {
        dp[i] = dp[j];
        from[i] = j;
      }
    }
    dp[i]++;
    if (dp[i] > dp[maxIndex]) {
      maxIndex = i;
    }
  }

  const ans = [];
  for (let i = maxIndex; i >= 0; i = from[i]) {
    if (i === -1) {
      break;
    }
    ans.push(nums[i]);
  }
  return ans;
}
