function percentageLetter(s: string, letter: string): number {
  return Math.floor(((s.split(letter).length - 1) * 100) / s.length);
}
