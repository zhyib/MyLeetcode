function minOperations(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  if (nums[0] < k) {
    return -1;
  }
  const map: Record<number, number> = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] ? 1 : map[nums[i]] + 1;
  }
  return Object.keys(map).length - (nums[0] === k ? 1 : 0);
}
