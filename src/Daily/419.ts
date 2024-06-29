function countBattleships(board: string[][]): number {
  const row = new Array(board.length).fill(false);
  let hasShip = false;
  let ans = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "X") {
        if (hasShip) {
          continue;
        }
        if (row[j]) {
          continue;
        }
        if (i < board.length - 1 && board[i + 1][j] === "X") {
          row[j] = true;
        } else {
          hasShip = true;
        }
      } else {
        if (hasShip) {
          ans++;
          hasShip = false;
        }
        if (row[j]) {
          ans++;
          row[j] = false;
        }
      }
    }
    if (hasShip) {
      ans++;
      hasShip = false;
    }
  }
  return ans + row.reduce((a, b) => a + +b, 0);
}

countBattleships([
  [".", "X"],
  ["X", "."],
]);
