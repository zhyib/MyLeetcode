function findKOr(nums: number[], k: number): number {
  let ans = 0;
  for (let i = 0; i < 31; i++) {
    let count = 0;
    nums.forEach((num) => {
      count += (num >> i) & 1;
    });
    if (count >= k) {
      ans += 1 << i;
    }
  }
  return ans;
}
