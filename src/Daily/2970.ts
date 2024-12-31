function incremovableSubarrayCount(nums: number[]): number {
  const n = nums.length;
  let i = 0;
  while (i < n - 1 && nums[i] < nums[i + 1]) {
    i++;
  }
  if (i === n - 1) {
    // 每个非空子数组都可以移除
    return (n * (n + 1)) / 2;
  }

  let ans = i + 2; // 不保留后缀的情况，一共 i+2 个
  // 枚举保留的后缀为 a[j:]
  for (let j = n - 1; j === n - 1 || nums[j] < nums[j + 1]; j--) {
    while (i >= 0 && nums[i] >= nums[j]) {
      i--;
    }
    // 可以保留前缀 a[:i+1], a[:i], ..., a[:0] 一共 i+2 个
    ans += i + 2;
  }
  return ans;
}
