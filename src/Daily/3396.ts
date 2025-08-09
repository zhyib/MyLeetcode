function minimumOperations(nums: number[]): number {
  const set = new Set<number>();
  for (let i = nums.length; i--; i >= 0) {
    if (set.has(nums[i])) {
      break;
    } else {
      set.add(nums[i]);
    }
  }
  return Math.ceil((nums.length - set.size) / 3);
}
