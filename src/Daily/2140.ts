function mostPoints(questions: number[][]): number {
  const n = questions.length;
  const dp = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    const [points, brainpower] = questions[i];
    if (i + brainpower + 1 < n) {
      dp[i] = Math.max(points + dp[i + brainpower + 1], dp[i + 1]);
    } else {
      if (i === n - 1) {
        dp[i] = points;
      } else {
        dp[i] = Math.max(points, dp[i + 1]);
      }
    }
  }
  return dp[0];
}

mostPoints([
  [12, 46],
  [78, 19],
  [63, 15],
  [79, 62],
  [13, 10],
]);
