function maxOperations(nums: number[]): number {
  let done = false;
  const n = nums.length;
  const memo = new Array(n).fill(0).map(() => new Array(n).fill(-1));

  function dfs(i: number, j: number, target: number) {
    if (done) {
      return 0;
    }
    if (i >= j) {
      done = true;
      return 0;
    }
    if (memo[i][j] !== -1) {
      // 之前计算过
      return memo[i][j];
    }
    let res = 0;
    if (nums[i] + nums[i + 1] === target) {
      // 删除前两个数
      res = Math.max(res, dfs(i + 2, j, target) + 1);
    }
    if (nums[j - 1] + nums[j] === target) {
      // 删除后两个数
      res = Math.max(res, dfs(i, j - 2, target) + 1);
    }
    if (nums[i] + nums[j] === target) {
      // 删除第一个和最后一个数
      res = Math.max(res, dfs(i + 1, j - 1, target) + 1);
    }
    memo[i][j] = res;
    return memo[i][j]; // 记忆化
  }

  function helper(i: number, j: number, target: number) {
    if (done) {
      // 说明之前已经算出了 res = n / 2
      return 0;
    }
    return dfs(i, j, target);
  }

  const res1 = helper(2, n - 1, nums[0] + nums[1]); // 删除前两个数
  const res2 = helper(0, n - 3, nums[n - 2] + nums[n - 1]); // 删除后两个数
  const res3 = helper(1, n - 2, nums[0] + nums[n - 1]); // 删除第一个和最后一个数
  return Math.max(res1, res2, res3) + 1; // 加上第一次操作
}
