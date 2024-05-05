function findOriginalArray(changed: number[]): number[] {
  changed.sort((a, b) => a - b);
  const map: Record<number, number> = {};
  const ans: number[] = [];
  changed.forEach((item) => {
    if (map[item]) {
      map[item] += 1;
    } else {
      map[item] = 1;
    }
  });
  for (let i = 0; i < changed.length; i++) {
    if (map[changed[i]] === 0) {
      continue;
    }
    map[changed[i]] -= 1;
    if (map[changed[i] * 2] > 0) {
      ans.push(changed[i]);
      map[changed[i] * 2] -= 1;
    } else {
      return [];
    }
  }
  return ans;
}
