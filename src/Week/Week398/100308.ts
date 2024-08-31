function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
  const ans = new Array(queries.length).fill(true);
  const index = new Array<number>(nums.length).fill(0);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] % 2 === nums[i + 1] % 2) {
      index[i + 1] = index[i] + 1;
    } else {
      index[i + 1] = index[i];
    }
  }

  for (let i = 0; i < queries.length; i++) {
    if (index[queries[i][1]] - index[queries[i][0]] > 0) {
      ans[i] = false;
    }
  }
  return ans;
}
