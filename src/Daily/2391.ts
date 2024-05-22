function garbageCollection(garbage: string[], travel: number[]): number {
  let g = 0;
  let m = 0;
  let p = 0;
  let ans = 0;
  garbage.forEach((item, index) => {
    let gCount = item.match(/G/g);
    let mCount = item.match(/M/g);
    let pCount = item.match(/P/g);
    if (gCount !== null) {
      ans += g;
      ans += gCount.length;
      g = 0;
    }
    if (mCount !== null) {
      ans += m;
      ans += mCount.length;
      m = 0;
    }
    if (pCount !== null) {
      ans += p;
      ans += pCount.length;
      p = 0;
    }
    if (index < garbage.length) {
      g += travel[index];
      p += travel[index];
      m += travel[index];
    }
  });
  return ans;
}
