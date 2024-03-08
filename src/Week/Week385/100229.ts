function longestCommonPrefix(arr1: number[], arr2: number[]): number {
  let ans = 0;
  function maxPrefix(s1: number, s2: number): number {
    const str1 = s1.toString();
    const str2 = s2.toString();
    let len = Math.min(str1.length, str2.length);
    for (let i = len - 1; i >= 0; i--) {
      if (i + 1 <= ans) {
        return 0;
      }
      if (str2.startsWith(str1.substring(0, i + 1))) {
        return i + 1;
      }
    }
    return 0;
  }

  arr1.sort((a, b) => b - a);
  arr2.sort((a, b) => b - a);
  for (const s1 of arr1) {
    if (s1.toString().length < ans) {
      continue;
    }
    for (const s2 of arr2) {
      if (s2.toString().length < ans) {
        continue;
      }
      ans = Math.max(ans, maxPrefix(s1, s2));
    }
  }
  return ans;
}
