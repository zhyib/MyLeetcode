function differenceOfSum(nums: number[]): number {
  let sum1 = 0;
  let sum2 = 0;
  nums.forEach((num) => {
    sum1 += num;
    while (num) {
      sum2 += num % 10;
      num = Math.floor(num / 10);
    }
  });
  return Math.abs(sum1 - sum2);
}
