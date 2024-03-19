class NumArray {
  arr: Array<number>;

  constructor(nums: number[]) {
    this.arr = nums;
  }

  sumRange(left: number, right: number): number {
    return this.arr
      .slice(left, right + 1)
      .reduce((prev, curr) => prev + curr, 0);
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
