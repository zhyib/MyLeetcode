function maximumLength(s: string): number {
  const map = new Array(26).fill(0).map(() => new Array<number>());
  let ans = 0;
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    cnt++;
    if (i + 1 === s.length || s[i] !== s[i + 1]) {
      // 统计连续字符长度
      // map 中为所有 s[i] 的长度
      map[s[i].charCodeAt(0) - "a".charCodeAt(0)].push(cnt);
      cnt = 0;
    }
  }

  for (const m of map) {
    if (m.length === 0) {
      continue;
    }
    m.sort((a, b) => b - a);
    m.push(0, 0);
    ans = Math.max(ans, m[0] - 2, Math.min(m[0] - 1, m[1]), m[2]);
  }
  return ans === 0 ? -1 : ans;
}
