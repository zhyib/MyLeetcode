function addSpaces(s: string, spaces: number[]): string {
  let ans = "";
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (j < spaces.length && i === spaces[j]) {
      ans += " ";
      j += 1;
    }
    ans += s[i];
  }
  return ans;
}
