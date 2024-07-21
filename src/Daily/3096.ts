function minimumLevels(possible: number[]): number {
  const sum = possible.reduce((pre, cur) => pre + (cur === 1 ? 1 : -1), 0);
  let left = 0;
  let right = sum;
  let i = 0;
  for (; i < possible.length - 1; i++) {
    left += possible[i] === 1 ? 1 : -1;
    right = sum - left;
    if (left > right) {
      return i + 1;
    }
  }
  return -1;
}
