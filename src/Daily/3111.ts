function minRectanglesToCoverPoints(points: number[][], w: number): number {
  const arr = points.map((item) => item[0]).sort((a, b) => a - b);
  let ans = 0;
  while (arr.length > 0) {
    const curr = arr[0] + w;
    ans += 1;
    while (arr.length > 0 && arr[0] <= curr) {
      arr.shift();
    }
  }
  return ans;
}
