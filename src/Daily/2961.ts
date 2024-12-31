function getGoodIndices(variables: number[][], target: number): number[] {
  function pow(x: number, n: number, mod: number) {
    let res = 1;
    while (n) {
      if (n % 2) {
        res = (res * x) % mod;
      }
      x = (x * x) % mod;
      n = Math.floor(n / 2);
    }
    return res;
  }

  const ans = [];
  for (let i = 0; i < variables.length; i++) {
    const [a, b, c, m] = variables[i];
    if (pow(pow(a, b, 10), c, m) === target) {
      ans.push(i);
    }
  }
  return ans;
}
