function removeTrailingZeros(num: string): string {
  while (num.endsWith("0")) {
    num = num.slice(0, -1);
  }
  return num;
}
