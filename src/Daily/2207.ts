function maximumSubsequenceCount(text: string, pattern: string): number {
  let res = 0,
    cnt1 = 0,
    cnt2 = 0;
  for (let c of text) {
    if (c == pattern[1]) {
      res += cnt1;
      cnt2++;
    }
    if (c == pattern[0]) {
      cnt1++;
    }
  }
  return res + Math.max(cnt1, cnt2);
}
