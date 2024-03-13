function divisibilityArray(word: string, m: number): number[] {
  let ans: Array<number> = [];
  let rest = 0;
  word.split("").forEach((w) => {
    let num = Number(w);
    rest = rest * 10 + num;
    if (rest % m === 0) {
      ans.push(1);
    } else {
      ans.push(0);
    }
    rest %= m;
  });
  return ans;
}
