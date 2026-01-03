function longestSubarray(nums: number[]): number {
  let ans = 0;
  let left = 0;
  let now = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      now++;
    } else {
      ans = Math.max(ans, left + now);
      left = now;
      now = 0;
    }
  }
  ans = Math.max(ans, left + now);
  if (nums.length === now) {
    ans = now - 1;
  }
  return ans;
}
