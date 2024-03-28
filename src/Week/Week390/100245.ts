function maximumLengthSubstring(s: string): number {
  const map: Record<string, number> = {};
  let max = 0;
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    if (map[s.charAt(i)] === undefined) {
      map[s.charAt(i)] = 1;
    } else {
      if (map[s.charAt(i)] === 2) {
        while (s.charAt(left) !== s.charAt(i)) {
          map[s.charAt(left)] -= 1;
          left += 1;
        }
        map[s.charAt(left)] -= 1;
        left += 1;
        max = Math.max(max, i - left + 1);
      }
      map[s.charAt(i)] += 1;
    }
    max = Math.max(max, i - left + 1);
  }
  max = Math.max(max, s.length - left);
  return max;
}
