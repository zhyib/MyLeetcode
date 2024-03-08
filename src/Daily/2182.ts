function repeatLimitedString(s: string, repeatLimit: number): string {
  const arr = new Array<number>(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - 97]++;
  }
  let res = "";
  for (let i = 25; i >= 0; i--) {
    while (arr[i] > repeatLimit) {
      res += new Array(repeatLimit).fill(String.fromCharCode(i + 97)).join("");
      arr[i] -= repeatLimit;
      let j = i - 1;
      for (; j >= -1; j--) {
        if (j === -1) {
          return res;
        }
        if (arr[j] > 0) {
          res += String.fromCharCode(j + 97);
          arr[j]--;
          break;
        }
      }
    }
    res += new Array(arr[i]).fill(String.fromCharCode(i + 97)).join("");
  }
  return res;
}

repeatLimitedString("cczazcc", 3);
