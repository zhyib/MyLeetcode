function accountsMerge(accounts: string[][]): string[][] {
  const emailToIdx = new Map();
  for (let i = 0; i < accounts.length; i++) {
    for (let k = 1; k < accounts[i].length; k++) {
      const email = accounts[i][k];
      if (!emailToIdx.has(email)) {
        emailToIdx.set(email, []);
      }
      emailToIdx.get(email).push(i);
    }
  }

  const vis = Array(accounts.length).fill(false);
  const emailSet = new Set<string>(); // 用于收集 DFS 中访问到的邮箱地址
  function dfs(i: number) {
    vis[i] = true;
    for (let k = 1; k < accounts[i].length; k++) {
      // 遍历 i 的所有邮箱地址
      const email = accounts[i][k];
      if (emailSet.has(email)) {
        continue;
      }
      emailSet.add(email);
      for (const j of emailToIdx.get(email)) {
        // 遍历所有包含该邮箱地址的账户下标 j
        if (!vis[j]) {
          // j 没有访问过
          dfs(j);
        }
      }
    }
  }

  const ans: string[][] = [];
  for (let i = 0; i < vis.length; i++) {
    if (!vis[i]) {
      // i 没有访问过
      emailSet.clear();
      dfs(i);
      ans.push([accounts[i][0], ...[...emailSet].sort()]);
    }
  }
  return ans;
}
