function findLatestTime(s: string): string {
  let ans: string = "";
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "?") {
      if (i === 0) {
        if (Number(s.charAt(1)) >= 2) {
          ans += "0";
        } else {
          ans += "1";
        }
      } else if (i === 1) {
        if (ans[0] === "1") {
          ans += "1";
        } else {
          ans += "9";
        }
      } else if (i === 3) {
        ans += 5;
      } else if (i === 4) {
        ans += 9;
      }
    } else {
      ans += s.charAt(i);
    }
  }
  return ans;
}
