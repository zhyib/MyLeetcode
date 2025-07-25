function maximumUniqueSubarray(nums: number[]): number {
  const map: Map<number, number> = new Map();
  let ans = 0;
  const queue: number[] = [];
  let sum = 0;
  for (const num of nums) {
    while (queue.length > 0 && map.has(num) && (map.get(num) as number) > 0) {
      const temp = queue.shift()!;
      map.set(temp, map.get(temp)! - 1);
      sum -= temp;
    }
    queue.push(num);
    map.set(num, 1);
    sum += num;
    ans = Math.max(ans, sum);
  }
  return ans;
}
