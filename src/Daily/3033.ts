function modifiedMatrix(matrix: number[][]): number[][] {
  const m = matrix.length;
  const n = matrix[0].length;
  const ans = Array.from(Array(m), () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    let max = -2;
    for (let j = 0; j < m; j++) {
      max = Math.max(max, matrix[j][i]);
    }
    for (let j = 0; j < m; j++) {
      ans[j][i] = matrix[j][i] === -1 ? max : matrix[j][i];
    }
  }
  return ans;
}
