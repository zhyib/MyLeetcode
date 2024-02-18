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

function replaceValueInTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  let arr = new Array<TreeNode>();
  root.val = 0;
  arr.push(root);
  while (arr.length !== 0) {
    let arr2 = new Array<TreeNode>();
    let sum = 0;
    for (const child of arr) {
      if (child.left !== null) {
        arr2.push(child.left);
        sum += child.left.val;
      }
      if (child.right !== null) {
        arr2.push(child.right);
        sum += child.right.val;
      }
    }
    for (const child of arr) {
      const childSum =
        (child.left ? child.left.val : 0) + (child.right ? child.right.val : 0);
      if (child.left) {
        child.left.val = sum - childSum;
      }
      if (child.right) {
        child.right.val = sum - childSum;
      }
    }
    arr = arr2;
  }
  return root;
}
