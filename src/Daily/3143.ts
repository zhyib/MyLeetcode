function maxPointsInsideSquare(points: number[][], s: string): number {
  const distance = (x: number, y: number) => Math.max(Math.abs(x), Math.abs(y));

  const map = new Map<string, number[]>();
  for (let i = 0; i < points.length; i++) {
    const [x, y] = points[i];
    const dist = distance(x, y);
    const char = s[i];
    if (!map.has(char)) {
      map.set(char, [dist]);
    } else {
      map.get(char)!.push(dist);
    }
  }

  for (const [char, arr] of map) {
    arr.sort((a, b) => a - b);
    map.set(char, arr);
  }

  let len = Number.MAX_SAFE_INTEGER;
  for (const [char, arr] of map) {
    let max: number;
    if (arr.length > 1) {
      max = arr[1] - 1;
    } else {
      max = Number.MAX_SAFE_INTEGER;
    }
    len = Math.min(len, max);
  }

  let ans = 0;
  for (const [char, arr] of map) {
    if (len >= arr[0]) {
      ans += 1;
    }
  }
  return ans;
}
