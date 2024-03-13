/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }
  let stack = new Array<TreeNode>();
  const ans = new Array<number[]>();
  let depth = 0;
  stack.push(root);
  while (stack.length > 0) {
    const list = new Array<number>();
    const stack2 = new Array<TreeNode>();
    for (const node of stack) {
      list.push(node.val);
      if (node.left !== null) {
        stack2.push(node.left);
      }
      if (node.right !== null) {
        stack2.push(node.right);
      }
    }
    if (depth % 2 === 1) {
      list.reverse();
    }
    ans.push(list);
    stack = stack2;
    depth += 1;
  }
  return ans;
}
