function findPermutationDifference(s: string, t: string): number {
  return Array.from(s).reduce((pre, cur, index) => {
    return pre + Math.abs(index - t.indexOf(cur));
  }, 0);
}
