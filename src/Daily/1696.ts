function maxResult(nums: number[], k: number): number {
  const dp = new Array<number>(nums.length).fill(0);
  const queue: number[] = [];
  dp[0] = nums[0];
  queue.push(0);
  for (let i = 1; i < nums.length; i++) {
    while (queue.length > 0 && queue[0] < i - k) {
      queue.shift();
    }
    dp[i] = dp[queue[0]] + nums[i];
    while (queue.length > 0 && dp[queue[queue.length - 1]] < dp[i]) {
      queue.pop();
    }
    queue.push(i);
  }
  return dp[dp.length - 1];
}

maxResult([1, -1, -2, 4, -7, 3], 2);
