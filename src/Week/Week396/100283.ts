function minAnagramLength(s: string): number {
  const map: Record<string, number> = {};
  for (const c of s) {
    map[c] = (map[c] ?? 0) + 1;
  }
  const arr = Object.values(map);
  arr.sort((a, b) => b - a);
  if (arr[0] !== arr[arr.length - 1]) {
    return s.length;
  }
  let node = s.length / arr[0];
  for (let i = 0; i < arr.length; i++) {}

  return Object.values(map).reduce((a, b) => Math.min(a, b), Infinity);
}
