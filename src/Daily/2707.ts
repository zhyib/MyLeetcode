function minExtraChar(s: string, dictionary: string[]): number {
  const dp = new Array<number>(s.length).fill(0)
  for (let i = 0; i < s.length; i++) {
    dp[i + 1] = dp[i] + 1;
    for (let j = i; j >= 0; j--) {
      if (dictionary.includes(s.substring(j, i + 1))) {
        dp[i + 1] = Math.min(dp[i + 1], dp[j]);
      }
    }
  }
  return dp[s.length];
};