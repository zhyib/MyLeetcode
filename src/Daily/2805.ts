function countWords(words1: string[], words2: string[]): number {
  const map1: Record<string, number> = {};
  const map2: Record<string, number> = {};
  words1.forEach((word) => {
    if (map1[word]) {
      map1[word]++;
    } else {
      map1[word] = 1;
    }
  })
  words2.forEach((word) => {
    if (map2[word]) {
      map2[word]++;
    } else {
      map2[word] = 1;
    }
  })
  let count = 0;
  for (const word in map1) {
    if (map1[word] === 1 && map2[word] === 1) {
      count += 1;
    }
  }
  return count;
};