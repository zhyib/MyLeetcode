function countSubstrings(s: string, c: string): number {
  let indices: number[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === c) {
      indices.push(i);
    }
  }
  let len = indices.length;
  return indices.reduce((pre, cur, index) => {
    return pre + (len - index);
  }, 0);
}
