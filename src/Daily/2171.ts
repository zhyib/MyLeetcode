function minimumRemoval(beans: number[]): number {
  const nums = beans.sort((a, b) => b - a);
  let sum = nums.reduce((prev, curr) => prev + curr, 0);
  let min = sum;
  for (let i = 0; i < nums.length; i++) {
    if (i > 0) {
      sum = sum + i * (nums[i - 1] - nums[i]) - nums[i];
    } else {
      sum = sum - nums[i];
    }
    min = Math.min(sum, min);
  }
  return min;
};