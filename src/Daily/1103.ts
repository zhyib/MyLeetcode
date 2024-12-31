function distributeCandies(candies: number, num_people: number): number[] {
  const ans: number[] = new Array<number>(num_people).fill(0);
  let i = 1;
  while (candies > 0) {
    ans[(i - 1) % num_people] += Math.min(i, candies);
    candies -= i;
    i += 1;
  }
  return ans;
}
