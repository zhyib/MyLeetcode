function clearDigits(s: string): string {
  let ans = "";
  while (ans !== s) {
    ans = s;
    s = s.replace(/[a-z]\d/, "");
  }
  return ans;
}
