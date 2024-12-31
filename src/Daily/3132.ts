function minimumAddedInteger(nums1: number[], nums2: number[]): number {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  for (let i = 2; i > 0; i--) {
    const x = nums2[0] - nums1[i];
    let j = 0;
    for (let k = i; k < nums1.length; k++) {
      if (nums2[j] === nums1[k] + x && ++j === nums2.length) {
        return x;
      }
    }
  }
  return nums2[0] - nums1[0];
}
