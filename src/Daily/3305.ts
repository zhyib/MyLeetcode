function countOfSubstrings(word: string, k: number): number {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const count = (m: number): number => {
    let n = word.length,
      consonants = 0,
      res = 0;
    let occur = new Map<string, number>();
    for (let i = 0, j = 0; i < n; i++) {
      while (j < n && (consonants < m || occur.size < 5)) {
        let ch = word[j];
        if (vowels.has(ch)) {
          occur.set(ch, (occur.get(ch) || 0) + 1);
        } else {
          consonants++;
        }
        j++;
      }
      if (consonants >= m && occur.size === 5) {
        res += n - j + 1;
      }
      let left = word[i];
      if (vowels.has(left)) {
        occur.set(left, occur.get(left)! - 1);
        if (occur.get(left) === 0) {
          occur.delete(left);
        }
      } else {
        consonants--;
      }
    }
    return res;
  };
  return count(k) - count(k + 1);
}
