function countHillValley(nums: number[]): number {
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      // nums[i] 不是重复项
      nums[k] = nums[i]; // 保留 nums[i]
      k++;
    }
  }

  let ans = 0;
  for (let i = 1; i < k - 1; i++) {
    if (nums[i - 1] < nums[i] === nums[i] > nums[i + 1]) {
      ans++;
    }
  }
  return ans;
}
