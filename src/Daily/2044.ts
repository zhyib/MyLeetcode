function countMaxOrSubsets(nums: number[]): number {
  const total = nums.reduce((pre, cur) => pre | cur, 0);
  let ans = 0;

  const traverse = (index: number, cur: number) => {
    if (index === nums.length) {
      if (total === cur) {
        ans++;
      }
      return;
    }
    traverse(index + 1, cur);
    traverse(index + 1, cur | nums[index]);
  };
  traverse(0, 0);
  return ans;
}
