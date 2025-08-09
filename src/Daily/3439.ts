function maxFreeTime(
  eventTime: number,
  k: number,
  startTime: number[],
  endTime: number[]
): number {
  const arr: number[] = new Array(startTime.length).fill(0);
  arr[0] = startTime[0];
  for (let i = 1; i < startTime.length; i++) {
    arr[i] = startTime[i] - endTime[i - 1];
  }
  arr[startTime.length] = eventTime - endTime[endTime.length - 1];

  let ans = 0;
  let temp = 0;
  for (let i = 0; i < k + 1; i++) {
    ans += arr[i];
  }
  temp = ans;
  for (let i = 1; i < arr.length - k; i++) {
    temp = temp - arr[i - 1] + arr[i + k];
    ans = Math.max(ans, temp);
  }
  return ans;
}
