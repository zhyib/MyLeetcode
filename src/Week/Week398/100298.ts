function waysToReachStair(k: number): number {
  const arr = new Array<number>(32).fill(1);
  function factorial(num: number): number {
    if (arr[num] !== 1) {
      return arr[num];
    }
    if (num === 0) {
      return 1;
    } else {
      arr[num] = num * factorial(num - 1);
      return arr[num];
    }
  }

  let ans = 0;
  for (let i = -1; i < 30; i++) {
    if (
      1 + Math.pow(2, i + 1) - 1 - k >= 0 &&
      1 + Math.pow(2, i + 1) - 1 - k <= i + 2
    ) {
      let ones = 1 + Math.pow(2, i + 1) - 1 - k;
      ans += factorial(i + 2) / (factorial(ones) * factorial(i + 2 - ones));
    }
  }
  return ans;
}

console.log(waysToReachStair(536870884));
