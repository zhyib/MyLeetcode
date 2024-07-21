function maximumPrimeDifference(nums: number[]): number {
  const primes: Set<number> = new Set([
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ]);

  const n: number = nums.length;
  let first: number = -1,
    ans: number = 0;
  for (let i: number = 0; i < n; ++i) {
    if (primes.has(nums[i])) {
      if (first !== -1) {
        ans = Math.max(ans, i - first);
      } else {
        first = i;
      }
    }
  }
  return ans;
}
