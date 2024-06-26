function findPeaks(mountain: number[]): number[] {
  const ans: number[] = [];
  for (let i = 1; i < mountain.length - 1; i++) {
    if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) {
      ans.push(i);
    }
  }
  return ans;
}
