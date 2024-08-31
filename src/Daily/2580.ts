function countWays(ranges: number[][]): number {
  let count = 0;
  ranges.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  let lastEnd = ranges[0][1];
  for (let i = 1; i < ranges.length; i++) {
    if (lastEnd < ranges[i][0]) {
      count += 1;
      lastEnd = ranges[i][1];
    } else {
      lastEnd = Math.max(ranges[i][1], lastEnd);
    }
  }
  count += 1;
  let ans = 1;
  for (let i = 0; i < count; i++) {
    ans *= 2;
    ans %= 1e9 + 7;
  }
  return ans;
}
