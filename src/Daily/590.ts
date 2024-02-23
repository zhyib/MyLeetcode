/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function postorder(root: Node | null): number[] {
  const ans = new Array<number>();
  function dfs(node: Node | null) {
    if (node === null) return;
    node.children.forEach((child) => dfs(child));
    ans.push(node.val);
  }

  dfs(root);
  return ans;
};