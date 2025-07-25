function longestPalindrome(words: string[]): number {
  const cnt = Array.from({ length: 26 }, () => Array(26).fill(0));
  for (const w of words) {
    cnt[w.charCodeAt(0) - 97][w.charCodeAt(1) - 97]++;
  }

  let ans = 0;
  let odd = 0;
  for (let i = 0; i < 26; i++) {
    const c = cnt[i][i];
    ans += c - (c % 2);
    odd |= c % 2;
    for (let j = i + 1; j < 26; j++) {
      ans += Math.min(cnt[i][j], cnt[j][i]) * 2;
    }
  }
  return (ans + odd) * 2;
}
