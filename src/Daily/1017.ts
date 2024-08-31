function baseNeg2(n: number): string {
  function getNeg2Str(m: number): string {
    if (m === 0) {
      return "";
    } else {
      console.log(m % -2);
      let mod = m % -2;
      let m2 = m / -2 > 0 ? Math.floor(m / -2) : Math.ceil(m / -2);
      if (mod === -1) {
        mod = 1;
        m2 += 1;
      }
      return `${getNeg2Str(m2)}${mod}`;
    }
  }

  return n === 0 ? "0" : getNeg2Str(n);
}

baseNeg2(2);
