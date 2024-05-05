function diagonalSort(mat: number[][]): number[][] {
  const map: Record<number, number[]> = {};
  let m = mat.length; // 3
  let n = mat[0].length; // 4

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let index = j - i;
      if (map[index] === undefined) {
        map[index] = [mat[i][j]];
      } else {
        map[index].push(mat[i][j]);
      }
    }
  }

  Object.values(map).forEach((item) => item.sort((a, b) => a - b));
  Object.entries(map).forEach(([index, arr]) => {
    for (let i = 0; i < arr.length; i++) {
      if (Number(index) < 0) {
        mat[i - Number(index)][i] = arr[i];
      } else {
        mat[i][i + Number(index)] = arr[i];
      }
    }
  });
  return mat;
}

diagonalSort([
  [3, 3, 1, 1],
  [2, 2, 1, 2],
  [1, 1, 1, 2],
]);
