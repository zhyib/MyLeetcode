function maxFreqSum(s: string): number {
  const cnt = Array(26).fill(0);
  let maxVowelCnt = 0;
  let maxConsonantCnt = 0;
  for (const ch of s) {
    const idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
    cnt[idx]++;
    if ('aeiou'.includes(ch)) {
      maxVowelCnt = Math.max(maxVowelCnt, cnt[idx]);
    } else {
      maxConsonantCnt = Math.max(maxConsonantCnt, cnt[idx]);
    }
  }
  return maxVowelCnt + maxConsonantCnt;
};
