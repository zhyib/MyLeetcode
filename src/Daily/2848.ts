function numberOfPoints(nums: number[][]): number {
  const arr: number[] = new Array(Math.max(...nums.map((item) => item[1])) + 2).fill(0);
  for (const [start, end] of nums) {
    arr[start] += 1;
    arr[end + 1] -= 1;
  }

  let ans = 0;
  let count = 0;
  arr.forEach((item) => {
    count += item;
    if (count > 0) {
      ans += 1;
    }
  });
  return ans;
}
