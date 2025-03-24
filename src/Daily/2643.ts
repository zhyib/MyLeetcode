function rowAndMaximumOnes(mat: number[][]): number[] {
  let count = 0;
  let index = -1;
  for (let i = 0; i < mat.length; i++) {
    let temp = mat[i].filter((item) => item === 1).length;
    if (temp > count) {
      count = temp;
      index = i;
    }
  }
  return [index, count];
}
