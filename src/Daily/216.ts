function combinationSum3(k: number, n: number): number[][] {
  const map: Record<string, number[]> = {};
  const arr: number[][] = [];
  function getSum(
    start: number,
    left: number,
    target: number,
    trace: number[]
  ): void {
    if (left === 0 && target === 0) {
      arr.push([...trace]);
      return;
    }
    for (let i = start; i <= 9; i++) {
      if (i > target) {
        break;
      }
      trace.push(i);
      getSum(i + 1, left - 1, target - i, trace);
      trace.pop();
    }
    return;
  }

  getSum(1, k, n, []);

  return arr;
}
