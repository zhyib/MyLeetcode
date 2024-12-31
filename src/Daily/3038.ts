function maxOperations(nums: number[]): number {
  let ans = 0;
  let last = 0;
  for (let i = 0; i < nums.length; i += 2) {
    if (last === 0 || nums[i] + nums[i + 1] === last) {
      last = nums[i] + nums[i + 1];
      ans++;
    } else {
      return ans;
    }
  }
  return ans;
}
