function minimumRounds(tasks: number[]): number {
  let map: Record<string, number> = {};
  tasks.forEach((task) => {
    map[task] = map[task] ? map[task] + 1 : 1;
  });
  let ans = 0;
  let arr = Object.entries(map);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] === 1) {
      return -1;
    } else {
      ans += Math.ceil(arr[i][1] / 3);
    }
  }
  return ans;
}

// 1 -1
// 2 1
// 3 1
// 4 2
// 5 2
// 6 2
// 7 3
// 8 3
// 9 3
