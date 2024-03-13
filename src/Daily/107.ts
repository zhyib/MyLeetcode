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

function levelOrderBottom(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }
  let stack = new Array<TreeNode>();
  const ans = new Array<number[]>();
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
    ans.push(list);
    stack = stack2;
  }
  return ans.reverse();
};