function jobScheduling(
  startTime: number[],
  endTime: number[],
  profit: number[]
): number {
  function binarySearch(arr: number[][], end: number, target: number): number {
    let start = 0;
    while (start < end) {
      const mid = start + Math.floor((end - start) / 2);
      if (arr[mid][1] > target) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return start;
  }

  let arr = new Array(startTime.length)
    .fill(0)
    .map((_, index) => [startTime[index], endTime[index], profit[index]]);
  arr.sort((a, b) => a[1] - b[1]);
  let dp = new Array(arr.length + 1).fill(0);
  for (let i = 1; i <= arr.length; i++) {
    const k = binarySearch(arr, i - 1, arr[i - 1][0]);
    dp[i] = Math.max(dp[i - 1], dp[k] + arr[i - 1][2]);
  }
  return dp[arr.length];
}
