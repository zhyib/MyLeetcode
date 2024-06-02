function distributeCandies(n: number, limit: number): number {
  function c2(n: number) {
    return n > 1 ? (n * (n - 1)) / 2 : 0;
  }
  return (
    c2(n + 2) -
    3 * c2(n - limit + 1) +
    3 * c2(n - 2 * limit) -
    c2(n - 3 * limit - 1)
  );
}
