function sumIndicesWithKSetBits(nums: number[], k: number): number {
  return nums.reduce((prev, curr, index) => {
    const ones = index
      .toString(2)
      .split("")
      .reduce((prev, curr) => prev + (curr === "0" ? 0 : 1), 0);
    return ones === k ? prev + curr : prev;
  }, 0);
}
