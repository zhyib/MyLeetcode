function minimumSteps(s: string): number {
  const n = s.length;
  const arr = s.split("");
  let left = 0;
  let right = n - 1;
  let ans = 0;
  while (left < right) {
    if (arr[left] === "1" && arr[right] === "0") {
      arr[left] = "0";
      arr[right] = "1";
      ans += right - left;
      left++;
      right--;
    }
    while (arr[left] === "0") {
      left += 1;
    }
    while (arr[right] === "1") {
      right -= 1;
    }
  }
  return ans;
}

minimumSteps("100");
