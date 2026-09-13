function spellchecker(wordlist: string[], queries: string[]): string[] {
  const words_perfect = new Set<string>();
  const words_cap = new Map<string, string>();
  const words_vow = new Map<string, string>();

  function devowel(word: string): string {
    let ans = '';
    for (const c of word) {
      ans += ['a', 'e', 'i', 'o', 'u'].includes(c.toLowerCase()) ? '*' : c;
    }
    return ans;
  }

  function solve(query: string): string {
    if (words_perfect.has(query)) {
      return query;
    }

    const queryL = query.toLowerCase();
    if (words_cap.has(queryL)) {
      return words_cap.get(queryL)!;
    }

    const queryLV = devowel(queryL);
    if (words_vow.has(queryLV)) {
      return words_vow.get(queryLV)!;
    }

    return '';
  }

  for (const word of wordlist) {
    words_perfect.add(word);

    const wordlow = word.toLowerCase();
    if (!words_cap.has(wordlow)) {
      words_cap.set(wordlow, word);
    }

    const wordlowDV = devowel(wordlow);
    if (!words_vow.has(wordlowDV)) {
      words_vow.set(wordlowDV, word);
    }
  }

  return queries.map(query => solve(query));
}
