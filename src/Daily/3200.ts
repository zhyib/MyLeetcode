function maxHeightOfTriangle(red: number, blue: number): number {
  const count = new Array(2).fill(0);
  for (let i = 1; ; i++) {
    count[i % 2] += i;
    if ((count[0] > red || count[1] > blue) && (count[0] > blue || count[1] > red)) {
      return i - 1;
    }
  }
}
