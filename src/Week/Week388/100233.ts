function minimumBoxes(apple: number[], capacity: number[]): number {
  let weight = apple.reduce((acc, cur) => acc + cur, 0);
  capacity.sort((a, b) => b - a);
  let ans = 0;
  while (weight > 0) {
    weight -= capacity.shift();
    ans += 1;
  }
  return ans;
}
