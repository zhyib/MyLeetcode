function minimumSubstringsInPartition(s: string): number {
  let n = s.length;
  let dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  let cnt = new Array(26).fill(0);
  for (let i = 0; i < n; i++) {
    cnt = new Array(26).fill(0);
    let k = 0;
    let maxCnt = 0;
    for (let j = i; j >= 0; j--) {
      k += cnt[s.charCodeAt(j) - 97] === 0 ? 1 : 0;
      cnt[s.charCodeAt(j) - 97] += 1;
      maxCnt = Math.max(maxCnt, cnt[s.charCodeAt(j) - 97]);
      if (i - j + 1 === k * maxCnt) {
        dp[i + 1] = Math.min(dp[i + 1], dp[j] + 1);
      }
    }
  }
  return dp[n];
}
