function getSmallestString(s: string, k: number): string {
  const arr = Array.from(s);
  for (let i = 0; i < arr.length; i++) {
    if (k === 0) {
      break;
    }
    const code = arr[i].charCodeAt(0);
    const diffMax = Math.min(code - 97, 97 + 26 - code);
    if (k > diffMax) {
      k -= diffMax;
      arr[i] = "a";
    } else {
      const char = String.fromCharCode(code - 26 + k < 97 ? code - k : code - 26 + k);
      arr[i] = char;
      break;
    }
  }
  return arr.join("");
}
