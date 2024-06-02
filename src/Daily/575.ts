function distributeCandies(candyType: number[]): number {
  let types = 0;
  const map = new Map<number, boolean>();
  candyType.forEach((item) => {
    if (map.get(item) === undefined) {
      map.set(item, true);
      types++;
    }
  });
  return Math.min(types, candyType.length / 2);
}
