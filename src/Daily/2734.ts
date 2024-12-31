function smallestString(s: string): string {
  let ans = "";
  // 0 未开始
  // 1 开始
  // -1 结束
  let status = 0;
  for (let i = 0; i < s.length; i++) {
    if (status === 0) {
      if (s.charAt(i) !== "a") {
        ans += String.fromCharCode(s.charCodeAt(i) - 1);
        status = 1;
      } else {
        ans += s.charAt(i);
      }
    } else if (status === 1) {
      if (s.charAt(i) === "a") {
        ans += s.charAt(i);
        status = -1;
      } else {
        ans += String.fromCharCode(s.charCodeAt(i) - 1);
      }
    } else {
      ans += s.charAt(i);
    }
  }
  if (status === 0) {
    ans = ans.slice(0, ans.length - 1) + "z";
  }
  return ans;
}
