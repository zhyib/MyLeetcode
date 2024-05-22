function findMinimumTime(tasks: number[][]): number {
  tasks.sort((a, b) => a[1] - b[1]);
  const n = tasks.length;
  let ans = 0;
  const run = new Array<number>(tasks[n - 1][1] + 1).fill(0);
  for (let i = 0; i < n; i++) {
    const [start, end] = tasks[i];
    let duration = tasks[i][2];
    duration -= run.slice(start, end + 1).reduce((pre, cur) => pre + cur, 0);
    if (duration > 0) {
      ans += duration;
      for (let j = end; j >= start; j--) {
        if (run[j] === 0) {
          run[j] = 1;
          duration--;
        }
        if (duration === 0) break;
      }
    }
  }
  return ans;
}

findMinimumTime([
  [2, 3, 1],
  [4, 5, 1],
  [1, 5, 2],
]);
