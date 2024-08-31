function minOperations(k: number): number {
  const sqrt = Math.sqrt(k);
  let min = Math.floor(sqrt);
  if (sqrt === min) {
    return (min - 1) * 2;
  } else {
    if (min * (min + 1) >= k) {
      return min - 1 + min;
    } else {
      return min * 2;
    }
  }
}
