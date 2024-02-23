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

function kthLargestLevelSum(root: TreeNode | null, k: number): number {
  if (root === null) {
    return 0;
  }
  let stack = new Array<TreeNode>();
  const ans = new Array<number>();
  stack.push(root);
  while (stack.length > 0) {
    let sum = 0;
    const stack2 = new Array<TreeNode>();
    for (const node of stack) {
      sum += node.val;
      if (node.left !== null) {
        stack2.push(node.left);
      }
      if (node.right !== null) {
        stack2.push(node.right);
      }
    }
    ans.push(sum);
    stack = stack2;
  }
  return k > ans.length ? -1 : ans.sort((a, b) => b - a)[k - 1];
}
