function reachableNodes(
  n: number,
  edges: number[][],
  restricted: number[]
): number {
  const restrictedArr: boolean[] = new Array(n).fill(false);
  for (const node of restricted) {
    restrictedArr[node] = true;
  }
  const arr = new Array(n).fill(0).map((item) => new Array<number>());
  for (const edge of edges) {
    if (!restrictedArr[edge[0]] && !restrictedArr[edge[1]]) {
      arr[edge[0]].push(edge[1]);
      arr[edge[1]].push(edge[0]);
    }
  }
  let ans = 1;
  function dfs(curr: number, parent: number) {
    for (const node of arr[curr]) {
      if (node !== parent) {
        ans++;
        dfs(node, curr);
      }
    }
  }
  dfs(0, -1);
  return ans;
}
