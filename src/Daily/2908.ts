function minimumSum(nums: number[]): number {
  const n = nums.length;
  const suf = Array(n); // 后缀最小值
  suf[n - 1] = nums[n - 1];
  for (let i = n - 2; i > 1; i--) {
    suf[i] = Math.min(suf[i + 1], nums[i]);
  }

  let ans = Infinity;
  let pre = nums[0]; // 前缀最小值
  for (let j = 1; j < n - 1; j++) {
    if (pre < nums[j] && nums[j] > suf[j + 1]) {
      // 山形
      ans = Math.min(ans, pre + nums[j] + suf[j + 1]); // 更新答案
    }
    pre = Math.min(pre, nums[j]);
  }
  return ans === Infinity ? -1 : ans;
}
