function numberOfSpecialChars1(word: string): number {
  let ans = 0;
  for (let j = 0; j < 26; j++) {
    if (
      word.indexOf(String.fromCharCode(97 + j)) !== -1 &&
      word.indexOf(String.fromCharCode(65 + j)) !== -1
    ) {
      ans += 1;
    }
  }
  return ans;
}
