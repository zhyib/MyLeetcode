function distinctDifferenceArray(nums: number[]): number[] {
  let set = new Set();
  let sizeArr = new Array(nums.length + 1).fill(0);
  for (let i = nums.length - 1; i > 0; i--) {
    set.add(nums[i]);
    sizeArr[i] = set.size;
  }
  let res = [];
  set.clear();
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
    res.push(set.size - sizeArr[i + 1]);
  }
  return res;
}
