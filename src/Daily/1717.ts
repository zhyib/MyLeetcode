function maximumGain(s: string, x: number, y: number): number {
  let ans = 0;

  function erase(c: string, score: number) {
    const arr: string[] = [];
    const [l, r] = Array.from(c);
    for (let i = 0; i < s.length; i++) {
      if (arr.length > 0 && s.charAt(i) === r && arr[arr.length - 1] === l) {
        arr.pop();
        ans += score;
      } else {
        arr.push(s.charAt(i));
      }
    }
    return arr.join("");
  }

  if (x > y) {
    s = erase("ab", x);
    s = erase("ba", y);
  } else {
    s = erase("ba", y);
    s = erase("ab", x);
  }
  return ans;
}

maximumGain("cdbcbbaaabab", 4, 5);
