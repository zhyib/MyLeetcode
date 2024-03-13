function getHint(secret: string, guess: string): string {
  let map: Record<string, number> = {};
  let guessed: Record<string, boolean> = {};
  let bull = 0;
  let cow = 0;
  secret.split("").forEach((s, index) => {
    if (s === guess.charAt(index)) {
      bull += 1;
      guessed[index] = true;
    } else {
      if (map[s]) {
        map[s]++;
      } else {
        map[s] = 1;
      }
    }
  });

  guess.split("").forEach((g, index) => {
    if (!guessed[index] && map[g] > 0) {
      cow += 1;
      map[g] -= 1;
    }
  });
  return `${bull}A${cow}B`;
}
