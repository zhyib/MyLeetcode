function decrypt(code: number[], k: number): number[] {
  if (k === 0) {
    return new Array(code.length).fill(0);
  }

  const ans = new Array(code.length).fill(0);
  if (k > 0) {
    for (let i = 0; i < code.length; i++) {
      for (let j = 1; j < k; j++) {
        ans[i] += code[(i + j) % code.length];
      }
    }
  } else {
    for (let i = 0; i < code.length; i++) {
      for (let j = 1; j < -k; j++) {
        ans[i] += code[(i - j + code.length) % code.length];
      }
    }
  }
  return ans;
}
