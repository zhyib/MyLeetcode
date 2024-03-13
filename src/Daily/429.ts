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

function levelOrder(root: Node | null): number[][] {
  if (root === null) {
    return [];
  }
  let stack = new Array<Node>();
  const ans = new Array<number[]>();
  stack.push(root);
  while (stack.length > 0) {
    const list = new Array<number>();
    const stack2 = new Array<Node>();
    for (const node of stack) {
      list.push(node.val);
      stack2.push(...node.children)
    }
    ans.push(list);
    stack = stack2;
  }
  return ans;
};