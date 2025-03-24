function maxScoreSightseeingPair(values: number[]): number {
  let ans = 0;
  let mx = values[0] + 0;
  for (let j = 1; j < values.length; ++j) {
    ans = Math.max(ans, mx + values[j] - j);
    // 边遍历边维护
    mx = Math.max(mx, values[j] + j);
  }
  return ans;
}
