function numberOfSpecialChars2(word: string): number {
  let ans = 0;
  for (let j = 0; j < 26; j++) {
    const low = word.lastIndexOf(String.fromCharCode(97 + j));
    const up = word.indexOf(String.fromCharCode(65 + j));
    if (low !== -1 && up !== -1 && low < up) {
      ans += 1;
    }
  }
  return ans;
}
