function isSubstringPresent(s: string): boolean {
  const reversed = s.split("").reverse().join("");
  for (let i = 0; i < s.length - 1; i++) {
    if (reversed.includes(s.substring(i, i + 2))) {
      return true;
    }
  }
  return false;
}
