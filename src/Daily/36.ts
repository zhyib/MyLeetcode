function isValidSudoku(board: string[][]): boolean {
  const row = Array.from({ length: 9 }, () => Array(9).fill(false));
  const col = Array.from({ length: 9 }, () => Array(9).fill(false));
  const box = Array.from({ length: 9 }, () => Array(9).fill(false));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const b = board[i][j];
      if (b === '.') {
        continue;
      }
      const x = b.charCodeAt(0) - '1'.charCodeAt(0); // 字符 '1'~'9' 转成数字 0~8
      if (row[i][x] || col[j][x] || box[Math.floor(i / 3) + Math.floor(j / 3) * 3][x]) { // 重复遇到数字 x
        return false;
      }
      // 标记行、列、宫包含数字 x
      row[i][x] = true;
      col[j][x] = true;
      box[Math.floor(i / 3) + Math.floor(j / 3) * 3][x] = true;
    }
  }

  return true;
};
