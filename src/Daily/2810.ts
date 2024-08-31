function finalString(s: string): string {
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "i") {
      ans = ans.split("").reverse().join("");
    } else {
      ans = `${ans}${s.charAt(i)}`;
    }
  }
  return ans;
}
