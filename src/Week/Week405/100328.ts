function validStrings(n: number): string[] {
  const ans: string[] = [];
  function dfs(prev: string) {
    if (n === prev.length) {
      ans.push(prev);
      return;
    }
    if (prev.charAt(prev.length - 1) === "1") {
      dfs(prev + "0");
      dfs(prev + "1");
    } else {
      dfs(prev + "1");
    }
  }
  dfs("0");
  dfs("1");
  return ans;
}
