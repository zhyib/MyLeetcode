function maxArrayValue(nums: number[]): number {
  let index = nums.length - 1;
  while (index !== 0) {
    if (nums[index - 1] <= nums[index]) {
      nums[index - 1] += nums[index];
    }
    index -= 1;
  }
  return nums[0];
}
