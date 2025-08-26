function generate(numRows: number): number[][] {
  const ans: number[][] = [[1]];
  for (let i = 1; i < numRows; i++) {
    const row: number[] = [1];
    for (let j = 1; j <= ans[i - 1].length; j++) {
      row.push(ans[i - 1][j - 1] + (ans[i - 1][j] ?? 0));
    }
    ans.push(row);
  }
  return ans;
}
