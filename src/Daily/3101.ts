function countAlternatingSubarrays(nums: number[]): number {
  let ans = 0;
  let map: Record<string, number> = {};

  let prev = nums[0];
  let len = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === prev) {
      map[len] = map[len] ? map[len] + 1 : 1;
      len = 1;
    } else {
      prev = nums[i];
      len += 1;
    }
  }
  map[len] = map[len] ? map[len] + 1 : 1;
  return Object.entries(map).reduce((prev, [key, value]) => {
    return prev + (((1 + Number(key)) * Number(key)) / 2) * value;
  }, 0);
}
