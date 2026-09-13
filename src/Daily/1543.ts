function largestTriangleArea(points: number[][]): number {
  const n = points.length;
  let ans = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        const p1 = points[i], p2 = points[j], p3 = points[k];
        const x1 = p2[0] - p1[0], y1 = p2[1] - p1[1];
        const x2 = p3[0] - p1[0], y2 = p3[1] - p1[1];
        ans = Math.max(ans, Math.abs(x1 * y2 - y1 * x2));
      }
    }
  }
  return ans / 2.0;
};
