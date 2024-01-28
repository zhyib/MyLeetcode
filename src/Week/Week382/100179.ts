function minOrAfterOperations(nums: number[], k: number): number {
  const map = Array<Array<number>>();
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      map[i] = Array(k).fill(nums[0]);
      continue;
    }
    map[i] = Array(k).fill(0);
    for (let j = 0; j < Math.min(k, i); j++) {
      if (j === 0) {
        map[i][0] = map[i - 1][0];
        continue;
      }
      map[i][j] = Math.min(
        map[i - 1][j] | nums[i],
        map[i - 1][j - 1] | (nums[i - 1] & nums[i])
      );
    }
  }
  return map[nums.length - 1][k - 1];
}

console.log(minOrAfterOperations([7, 3, 15, 14, 2, 8], 4));
