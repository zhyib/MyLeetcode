function takeCharacters(s: string, k: number): number {
  const cnt = [0, 0, 0];
  for (const c of s) {
    cnt[c.charCodeAt(0) - 97]++; // 一开始，把所有字母都取走
  }
  if (cnt[0] < k || cnt[1] < k || cnt[2] < k) {
    return -1; // 字母个数不足 k
  }

  let mx = 0,
    left = 0;
  for (let right = 0; right < s.length; right++) {
    let c = s[right].charCodeAt(0) - 97;
    cnt[c]--; // 移入窗口，相当于不取走 c
    while (cnt[c] < k) {
      // 窗口之外的 c 不足 k
      cnt[s[left].charCodeAt(0) - 97]++; // 移出窗口，相当于取走 s[left]
      left++;
    }
    mx = Math.max(mx, right - left + 1);
  }
  return s.length - mx;
}
