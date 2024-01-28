/**
 * @param {number} n
 * @param {number} x
 * @param {number} y
 * @return {number[]}
 */
var countOfPairs = function(n, x, y) {
  const map = {};
  let xx = x;
  let yy = y;
  x = Math.min(xx, yy);
  y = Math.max(xx, yy);
  const loopLength = y - x + 1;
  const shorterInLoop = x === y ? 0 : 1;
  function getMin(x, y) {
    if (x === y) {
      return 0;
    }
    if (map[`${x}-${y}`] === undefined) {
      map[`${x}-${y}`] = Math.min(y - x, loopLength - (y - x));
    }
    return map[`${x}-${y}`];
  }

  const res = new Array(n).fill(0);
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if ((i < x && j < x) || (i > y && j > y)) {
        res[j - i - 1] += 2;
      } else if (x <= i && i <= y && x <= j && j <= y) {
        res[getMin(i, j) - 1] += 2;
      } else if (i <= x && j >= y) {
        res[x - i + shorterInLoop + j - y - 1] += 2;
      } else if (i <= x && x <= j && j < y) {
        res[x - i + getMin(x, j) - 1] += 2;
      } else if (x < i && i <= y && j >= y) {
        res[getMin(i, y) + j - y - 1] += 2;
      }
    }
  }
  return res;
}

countOfPairs(5, 2, 4);
