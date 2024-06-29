function maximumBeauty(nums: number[], k: number): number {
  let res = 0;
  let n = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0, j = 0; i < n; i++) {
    while (nums[i] - 2 * k > nums[j]) {
      j++;
    }
    res = Math.max(res, i - j + 1);
  }
  return res;
}
