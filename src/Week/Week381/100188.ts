function countOfPairs1(n: number, x: number, y: number): number[] {
  let xx = x;
  let yy = y;
  x = Math.min(xx, yy);
  y = Math.max(xx, yy);
  const loopLength = y - x + 1;
  const shorterInLoop = Math.min(y - x, loopLength - (y - x));
  const res = new Array(n).fill(0);
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if ((i < x && j < x) || (i > y && j > y)) {
        res[j - i - 1] += 1;
      } else if (x <= i && i <= y && x <= j && j <= y) {
        res[Math.min(j - i, loopLength - (j - i)) - 1] += 1;
      } else if (i <= x && j >= y) {
        res[x - i + shorterInLoop + j - y - 1] += 1;
      } else if (i <= x && x <= j && j < y) {
        res[x - i + Math.min(j - x, loopLength - (j - x)) - 1] += 1;
      } else if (x < i && i <= y && j >= y) {
        res[Math.min(y - i, loopLength - (y - i)) + j - y - 1] += 1;
      }
    }
  }
  return res.map((item) => item * 2);
}

countOfPairs1(4, 1, 1);
