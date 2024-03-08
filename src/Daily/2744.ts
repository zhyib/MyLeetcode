function maximumNumberOfStringPairs(words: string[]): number {
  const reverseWords = words.map((word) => word.split("").reverse().join(""));
  reverseWords.shift();
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (reverseWords.includes(words[i])) {
      count++;
    }
    reverseWords.shift();
  }
  return count;
}
