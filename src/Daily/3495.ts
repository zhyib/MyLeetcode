function minOperations(queries: number[][]): number {
  const count4 = (num: number) => {
    let ret = 0;
    while (num !== 0) {
      num = num >> 2;
      ret++;
    }
    return ret;
  };

  let ans = 0;
  for (let i = 0; i < queries.length; i++) {
    let temp = 0;
    const l = queries[i][0];
    const r = queries[i][1];
    const start = count4(l);
    const end = count4(r);
    for (let j = start; j <= end; j++) {
      temp += (Math.min((1 << (2 * j)) - 1, r) - Math.max(1 << (2 * (j - 1)), l) + 1) * j;
    }
    ans += Math.max(Math.ceil(temp / 2), end);
  }
  return ans;
};

minOperations([[1, 2], [2, 4]]);
