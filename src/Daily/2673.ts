function minIncrements(n: number, cost: number[]): number {
  const depth = Math.log2(n + 1) - 1;
  const maxArr = [...cost];
  for (let i = depth - 1; i >= 0; i--) {
    for (let j = 2 ** (i + 1) - 2; j >= 2 ** i - 1; j--) {
      maxArr[j] = Math.max(maxArr[2 * j + 1], maxArr[2 * j + 2]) + maxArr[j];
    }
  }

  let ans = 0;
  for (let i = 0; i < depth; i++) {
    for (let j = 2 ** i - 1; j <= 2 ** (i + 1) - 2; j++) {
      // 遍历深度为 depth 的所有结点
      let leftDiff = maxArr[j] - cost[j] - maxArr[2 * j + 1];
      let rightDiff = maxArr[j] - cost[j] - maxArr[2 * j + 2];
      cost[2 * j + 1] += leftDiff;
      cost[2 * j + 2] += rightDiff;
      maxArr[2 * j + 1] += leftDiff;
      maxArr[2 * j + 2] += rightDiff;
      ans = ans + leftDiff + rightDiff;
    }
  }
  return ans;
}

minIncrements(7, [1, 5, 2, 2, 3, 3, 1]);
