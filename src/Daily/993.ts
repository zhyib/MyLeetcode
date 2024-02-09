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

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  if (!root) return false;
  let arr = new Array<TreeNode>();
  arr.push(root);
  while (arr.length !== 0) {
    let depthCount = 0;
    const arr2 = new Array<TreeNode>();
    let parentVal = -1;
    for (let i = 0; i < arr.length; i++) {
      const node = arr[i];
      if (node.left !== null) {
        if (node.left.val === x || node.left.val === y) {
          parentVal = node.val;
          depthCount++;
        }
        arr2.push(node.left);
      }
      if (node.right !== null) {
        if (node.right.val === x || node.right.val === y) {
          if (parentVal === node.val) {
            return false;
          }
          depthCount++;
        }
        arr2.push(node.right);
      }
    }
    if (depthCount === 1) {
      return false;
    }
    if (depthCount === 2) {
      return true;
    }
    arr = arr2;
  }
  return false;
}
