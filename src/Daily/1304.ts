function sumZero(n: number): number[] {
  const ans: number[] = [];
  for (let i = 1; i <= n / 2; i++) {
    ans.push(i, -i);
  }
  if (n % 2 === 1) {
    ans.push(0);
  }
  return ans;
};
