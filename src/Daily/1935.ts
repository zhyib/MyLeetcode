function canBeTypedWords(text: string, brokenLetters: string): number {
  const letters = brokenLetters.split('');
  return text.split(' ').reduce((pre, cur) => {
    return letters.some(letter => cur.includes(letter)) ? pre : pre + 1;
  }, 0);
};
