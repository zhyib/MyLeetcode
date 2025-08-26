function minimumOperationsToMakeKPeriodic(word: string, k: number): number {
  const n = word.length;
  const map: Record<string, number> = {};
  for (let i = 0; i < n; i += k) {
    const sub = word.substring(i, i + k);
    map[sub] = (map[sub] || 0) + 1;
  }
  const arr = Object.values(map);
  arr.sort((a, b) => b - a);
  return arr.reduce((pre, cur) => pre + cur, 0) - arr[0];
}
