function totalFruit(fruits: number[]): number {
  const map = new Map<number, number>();
  let ans = 0;
  let left = 0;
  for (let i = 0; i < fruits.length; i++) {
    if (map.has(fruits[i])) {
      map.set(fruits[i], (map.get(fruits[i]) as number) + 1);
    } else if (map.size < 2) {
      map.set(fruits[i], 1);
    } else {
      ans = Math.max(ans, i - left);
      while (map.size >= 2) {
        const num = fruits[left];
        const count = map.get(num) as number;
        if (count === 1) {
          map.delete(num);
        } else {
          map.set(num, count - 1);
        }
        left++;
      }
      map.set(fruits[i], 1);
    }
  }
  ans = Math.max(ans, fruits.length - left);
  return ans;
}

totalFruit([0, 1, 1, 4, 3]);
