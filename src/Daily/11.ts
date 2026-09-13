function maxArea(height: number[]): number {
  let ans = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    ans = Math.max(ans, Math.min(height[left], height[right]) * (right - left));
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return ans;
};
