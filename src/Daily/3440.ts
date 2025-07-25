function maxFreeTime(
  eventTime: number,
  startTime: number[],
  endTime: number[]
): number {
  const arr: number[] = new Array(startTime.length).fill(0);
  arr[0] = startTime[0];
  for (let i = 1; i < startTime.length; i++) {
    arr[i] = startTime[i] - endTime[i - 1];
  }
  arr[startTime.length] = eventTime - endTime[endTime.length - 1];

  let a = -1;
  let b = -1;
  let c = -1;
  for (let i = 0; i < arr.length; i++) {
    if (a === -1 || arr[i] > arr[a]) {
      c = b;
      b = a;
      a = i;
    } else if (b === -1 || arr[i] > arr[b]) {
      c = b;
      b = i;
    } else if (c === -1 || arr[i] > arr[c]) {
      c = i;
    }
  }
  let ans = 0;
  for (let i = 0; i < startTime.length; i++) {
    const interval = endTime[i] - startTime[i];
    if (
      (i !== a && i + 1 !== a && interval <= arr[a]) ||
      (i !== b && i + 1 !== b && interval <= arr[b]) ||
      interval <= arr[c]
    ) {
      ans = Math.max(ans, arr[i] + arr[i + 1] + interval);
    } else {
      ans = Math.max(ans, arr[i] + arr[i + 1]);
    }
  }
  return ans;
}
