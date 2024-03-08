function minimumPushes(word: string): number {
  const map: Record<string, number> = {};
  word.split("").forEach((w) => {
    if (map[w]) {
      map[w] += 1;
    } else {
      map[w] = 1;
    }
  });
  const arr = Object.entries(map).sort((a, b) => b[1] - a[1]);
  let sum = 0;
  let time = 1;
  for (let i = 0; i < arr.length; i += 8) {
    for (let j = i; j < i + 8 && j < arr.length; j++) {
      sum += arr[j][1] * time;
    }
    time += 1;
  }
  return sum;
}

minimumPushes("aabbccddeeffgghhiiiiii");
