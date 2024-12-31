function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
  let a = nums1.reduce((pre, cur) => pre + (nums2.includes(cur) ? 1 : 0), 0);
  let b = nums2.reduce((pre, cur) => pre + (nums1.includes(cur) ? 1 : 0), 0);
  return [a, b];
}
