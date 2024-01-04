function bitLength(n: number) {
    let res = 0;
    while (n) {
        n >>= 1;
        res++;
    }
    return res;
}
function countTrailingZeros(n: number) {
    return bitLength(n & -n) - 1;
}

function maximumRows(matrix: number[][], numSelect: number): number {
  const m = matrix.length;
  const n = matrix[0].length;
  const masks = new Array(m).fill(0).map((item, index) => {
    return parseInt(matrix[index].join(''), 2);
  })
  const limit = Math.pow(2, n);
  let max = 0;
  let cur = (1 << numSelect) - 1;
  while (cur < limit) {
    let temp = 0;
    for (let j = 0; j < m; j++) {
      if ((masks[j] & cur) === masks[j]) {
        temp++;
      }
    }
    max = Math.max(temp, max);

    const lb = cur & -cur;
    const r = cur + lb;
    cur = ((r ^ cur) >> countTrailingZeros(lb) + 2) | r;
  }
  return max;
};

maximumRows([[1,0,0,0,0,0,0],[0,1,0,1,1,1,1],[0,0,0,1,0,0,1]], 5)

/*
function maximumRows(matrix: number[][], numSelect: number): number {
  const m = matrix.length;
  const n = matrix[0].length;
  const masks = new Array(m).fill(0).map((item, index) => {
    return parseInt(matrix[index].join(''), 2);
  })
  const limit = Math.pow(2, n);
  let max = 0;
  for (let i = 0; i < limit; i++) {
    const bin = i.toString(2);
    if (Number(bin.split('').reduce((prev, curr) => Number(prev) + Number(curr), 0)) !== numSelect) {
      continue;
    } 
    let temp = 0;
    for (let j = 0; j < m; j++) {
      if ((masks[j] & i) === masks[j]) {
        temp++;
      }
    }
    max = Math.max(temp, max);
  }
  return max;
};
*/