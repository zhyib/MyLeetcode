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

function preorder(root: Node | null): number[] {
  const ans = new Array<number>();
  function dfs(node: Node | null) {
    if (node === null) return;
    ans.push(node.val);
    node.children.forEach((child) => dfs(child));
  }

  dfs(root);
  return ans;
}
