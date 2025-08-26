function smallestSubarrays(nums: number[]): number[] {
  const n = nums.length;
  const ans = new Array(n).fill(0);
  let leftOr = 0;
  let sufOr = 0;
  let right = n - 1;
  let bottom = n - 1;
  for (let left = n - 1; left >= 0; left--) {
    sufOr |= nums[left];
    leftOr |= nums[left];
    while (right >= left && (leftOr | nums[right]) === sufOr) {
      right--;
      // 栈为空
      if (bottom > right) {
        for (let i = left + 1; i <= right; i++) {
          nums[i] |= nums[i - 1];
        }
        bottom = left;
        leftOr = 0;
      }
    }
    ans[left] = right - left + 2;
  }
  return ans;
}

smallestSubarrays([1, 0, 2, 1, 16]);
