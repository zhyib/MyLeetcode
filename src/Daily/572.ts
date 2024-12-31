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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  function isSameTree(a: TreeNode | null, b: TreeNode | null): boolean {
    if (a === null && b === null) {
      return true;
    }
    if (a === null || b === null) {
      return false;
    }
    return a.val === b.val && isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
  }

  if (root === null) {
    return false;
  }

  return (
    isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
  );
}
