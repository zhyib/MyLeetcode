function maxSatisfied(
  customers: number[],
  grumpy: number[],
  minutes: number
): number {
  const n = customers.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += grumpy[i] === 0 ? customers[i] : 0;
  }
  for (let i = 0; i < minutes; i++) {
    sum += grumpy[i] === 1 ? customers[i] : 0;
  }

  let max = sum;
  for (let i = minutes; i < n; i++) {
    if (grumpy[i] === 1) {
      sum += customers[i];
    }
    if (grumpy[i - minutes] === 1) {
      sum -= customers[i - minutes];
    }
    max = Math.max(sum, max);
  }
  return max;
}

maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3);
