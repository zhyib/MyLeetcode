function sumDigitDifferences(nums: number[]): number {
  let ans = 0;
  let len = String(nums[0]).length;
  let arr = new Array(len).fill(0).map(() => new Array(10).fill(0));
  nums.forEach((num, index) => {
    for (let i = 0; i < len; i++) {
      let digit = Math.floor(num / 10 ** i) % 10;
      ans += index - arr[i][digit];
      arr[i][digit] += 1;
    }
  });
  return ans;
}

sumDigitDifferences([13, 23, 12]);
