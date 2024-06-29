function minimumAverage(nums: number[]): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let ans: number[] = [];
  for (let i = 0; i < n / 2; i++) {
    ans.push((nums[i] + nums[n - i - 1]) / 2);
  }
  return Math.min(...ans);
}
