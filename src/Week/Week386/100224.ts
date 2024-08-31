function isPossibleToSplit(nums: number[]): boolean {
  const map: Record<number, number> = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map[num] === undefined) {
      map[num] = 1;
    } else {
      map[num]++;
    }
  }
  let flag = true;
  Object.values(map).forEach((value) => {
    if (value > 2) {
      flag = false;
    }
  });
  return flag;
}
