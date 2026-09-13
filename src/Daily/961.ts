function repeatedNTimes(nums: number[]): number {
  let ans = nums[0];
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[0]) {
      return nums[i];
    }
    if (count === 0) {
      count = 1;
      ans = nums[i];
    } else {
      if (nums[i] === ans) {
        count++;
      } else {
        count--;
      }
    }
  }
  return ans;
}

repeatedNTimes([8, 3, 2, 3]);