function maximumLength(nums: number[]): number {
  function check(num: number): number {
    const count = map[num];
    if (count >= 2) {
      return 2 + check(num ** 2);
    }
    if (count === 1) {
      return 1;
    }
    return -1;
  }

  const map: Record<number, number> = {};
  const arr = new Array<number>();
  nums.forEach((num) => {
    map[num] = map[num] === undefined ? 1 : map[num] + 1;
  });
  Object.keys(map).forEach((num) => {
    arr.push(Number(num));
  });
  arr.sort((a, b) => a - b);

  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      ans = Math.max(ans, Math.floor(map[arr[i]] / 2 - 1) * 2 + 1);
      continue;
    }
    if (map[arr[i]] === 0) {
      continue;
    }
    ans = Math.max(check(arr[i]), ans);
  }
  return ans;
}

maximumLength([
  1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024,
]);
