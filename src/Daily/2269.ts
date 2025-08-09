function divisorSubstrings(num: number, k: number): number {
  const s = num.toString();
  let ans = 0;
  for (let i = 0; i + k <= s.length; i++) {
    const sub = parseInt(s.substring(i, i + k));
    if (sub !== 0 && num % sub === 0) {
      ans++;
    }
  }
  return ans;
}
