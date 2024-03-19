function minimumDeletions(word: string, k: number): number {
  let map: Record<string, number> = {};
  word.split("").forEach((c) => {
    if (map[c] === undefined) {
      map[c] = 1;
    } else {
      map[c] += 1;
    }
  });

  const freqs = Object.values(map);
  let max = Math.max(...freqs);
  let arr = new Array<number>(max + 1).fill(0);
  freqs.forEach((freq) => {
    arr[freq] += 1;
  });

  let min = 0;
  for (let i = 0; i < arr.length - k - 1; i++) {
    if (arr[i] !== 0) {
      min += arr[i] * i;
    }
  }
  let needRemove = 0;
  let last = min;
  for (let i = arr.length - k - 2; i >= 0; i--) {
    needRemove += arr[i + k + 1];
    last = last + needRemove - arr[i] * i;
    min = Math.min(min, last);
  }
  return min;
}

minimumDeletions("uzzezzuzenzu", 0);
