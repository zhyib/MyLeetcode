function findDiagonalOrder(mat: number[][]): number[] {
  const m = mat.length;
  const n = mat[0].length;
  const ans = [];
  for (let i = 0; i < m + n - 1; i++) {
    const minJ = Math.max(i - m + 1, 0);
    const maxJ = Math.min(i, n - 1);
    if (i % 2 === 0) {
      // 偶数从左到右
      for (let j = minJ; j <= maxJ; j++) {
        ans.push(mat[i - j][j]);
      }
    } else {
      // 奇数从右到左
      for (let j = maxJ; j >= minJ; j--) {
        ans.push(mat[i - j][j]);
      }
    }
  }
  return ans;
}
