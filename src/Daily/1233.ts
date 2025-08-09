function removeSubfolders(folder: string[]): string[] {
  folder.sort();
  const ans: string[] = [];
  ans.push(folder[0]);
  for (let i = 1; i < folder.length; i++) {
    const pre = ans[ans.length - 1];
    if (!folder[i].startsWith(pre + "/")) {
      ans.push(folder[i]);
    }
  }
  return ans;
}
