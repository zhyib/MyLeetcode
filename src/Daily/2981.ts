function maximumLength(s: string): number {
  const map = new Array(26).fill(0).map(() => new Array<number>());
  let last = "";
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === last) {
      left += 1;
      for (let j = left; j >= 0; j--) {
        map[s.charCodeAt(i) - 97][j] = (map[s.charCodeAt(i) - 97][j] ?? 0) + 1;
      }
    } else {
      left = 0;
      last = s.charAt(i);
      map[s.charCodeAt(i) - 97][0] = (map[s.charCodeAt(i) - 97][0] ?? 0) + 1;
    }
  }
  let index = -1;
  let max = 0;
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] >= 3) {
        if (j > index) {
          max = map[i][j];
          index = j;
        } else if (j === index && map[i][j] > max) {
          max = map[i][j];
          index = j;
        }
      }
    }
  }
  return index === -1 ? -1 : index + 1;
}
