function sumDigitDifferences(nums: number[]): number {
  const digits = nums[0].toString().length;
  const n = nums.length;
  let arr = new Array(digits).fill(0).map(() => new Array(10).fill(0));
  for (const num of nums) {
    const str = num.toString();
    for (let i = 0; i < str.length; i++) {
      arr[i][parseInt(str[i])]++;
    }
  }

  let ans = 0;
  for (let i = 0; i < digits; i++) {
    for (let j = 0; j < 10; j++) {
      ans += arr[i][j] * (n - arr[i][j]);
    }
  }
  return ans / 2;
}

sumDigitDifferences([13, 23, 12]);
