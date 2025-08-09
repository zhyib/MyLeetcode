function maximumLength(nums: number[], k: number): number {
  const arr: number[][] = new Array(k).fill(0).map(() => new Array(k).fill(0));
  let ans = 0;
  for (const num of nums) {
    const i = num % k;
    for (let j = 0; j < k; j++) {
      arr[i][j] = arr[j][i] + 1;
      ans = Math.max(ans, arr[i][j]);
    }
  }
  return ans;
}

maximumLength([1, 2, 3, 4, 5], 2);
