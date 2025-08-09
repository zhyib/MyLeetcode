function minimumSum(n: number, k: number): number {
  let min = Math.floor(k / 2);
  if (n > min) {
    return ((1 + min) * min) / 2 + ((k + k + (n - min - 1)) * (n - min)) / 2;
  } else {
    return ((1 + n) * n) / 2;
  }
}
