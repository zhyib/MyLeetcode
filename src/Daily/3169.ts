function countDays(days: number, meetings: number[][]): number {
  const n = meetings.length;
  meetings.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  let count = 0;
  let left = -1;
  let right = -1;
  for (let i = 0; i < n; i++) {
    if (left === -1) {
      left = meetings[i][0];
      right = meetings[i][1];
    } else {
      if (right >= meetings[i][0]) {
        right = Math.max(right, meetings[i][1]);
      } else {
        count += right - left + 1;
        left = meetings[i][0];
        right = meetings[i][1];
      }
    }
  }
  if (left !== -1) {
    count += right - left + 1;
  }
  return days - count;
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
