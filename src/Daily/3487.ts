function maxSum(nums: number[]): number {
  nums.sort((a, b) => b - a);
  const arr: number[] = [];
  for (const num of nums) {
    if (arr.length === 0) {
      arr.push(num);
    } else {
      if (num <= 0) {
        break;
      }
      if (num !== arr[arr.length - 1]) {
        arr.push(num);
      }
    }
  }
  return arr.reduce((pre, cur) => pre + cur, 0);
}
