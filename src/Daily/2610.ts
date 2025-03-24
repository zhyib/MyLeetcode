function findMatrix(nums: number[]): number[][] {
  const map: Record<string, number> = {};
  const ans: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
    if (map[nums[i]] > ans.length) {
      ans.push([nums[i]]);
    } else {
      ans[map[nums[i]] - 1].push(nums[i]);
    }
  }
  return ans;
}
