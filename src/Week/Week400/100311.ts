function countDays(days: number, meetings: number[][]): number {
  const n = meetings.length;
  let arr: number[][] = [];
  meetings.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[0] - b[0];
  });
  for (let i = 0; i < n; i++) {
    let [start, end] = meetings[i];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][1] >= start) {
        start = Math.min(start, arr[j][0]);
        arr = arr.slice(0, j);
        break;
      }
    }
    arr.push([start, end]);
  }
  let sum = 0;
  arr.forEach((item) => {
    sum += item[1] - item[0] + 1;
  });
  return days - sum;
}

countDays(57, [
  [3, 49],
  [23, 44],
  [21, 56],
  [26, 55],
  [23, 52],
  [2, 9],
  [1, 48],
  [3, 31],
]);
