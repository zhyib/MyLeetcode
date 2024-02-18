/**
 * 对于前j个数字，进行第i次操作。
 * 选择不重置或者重置，所减少的总和的状态转移方程
 * dp[j][i] = Max(dp[j-1][i], dp[j-1][i-1] + nums1[j - 1] + nums2[j - 1] * i)
 */
 function minimumTime(nums1: number[], nums2: number[], x: number): number {
  const n = nums1.length;
  const dp = new Array<number>(n + 1).fill(0);
  const nums = nums1.map((a, i) => ({ a, b: nums2[i] }));
  nums.sort((a, b) => a.b - b.b);

  for (let j = 1; j <= n; j++) {
    const { a, b } = nums[j - 1];
    for (let i = n; i >= 1; i--) {
      dp[i] = Math.max(dp[i], dp[i - 1] + a + b * i);
    }
  }

  const s1 = nums1.reduce((sum, num) => sum + num, 0);
  const s2 = nums2.reduce((sum, num) => sum + num, 0);
  for (let i = 0; i <= n; i++) {
    if (s1 + s2 * i - dp[i] <= x) {
      return i;
    }
  }
  return -1;
};