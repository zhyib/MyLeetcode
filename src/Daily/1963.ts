function minSwaps(s: string): number {
  const arr = s.split("");
  let left = 0;
  let right = s.length - 1;
  let ans = 0;
  let pairs = 0;
  while (left < right) {
    if (pairs === 0) {
      if (arr[left] === "[") {
        pairs++;
      } else {
        while (arr[right] !== "[") {
          right--;
        }
        ans++;
        arr[left] = "[";
        arr[right] = "]";
        pairs++;
      }
    } else {
      if (arr[left] === "[") {
        pairs++;
      } else {
        pairs--;
      }
    }
    left++;
  }
  return ans;
}

minSwaps("]]][[[");
