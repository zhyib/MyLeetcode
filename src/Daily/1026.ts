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

function maxAncestorDiff(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  return dfs(root, root.val, root.val);
}

function dfs(root: TreeNode | null, mi: number, ma: number) {
  if (root === null) {
    return 0;
  }
  var diff = Math.max(Math.abs(root.val - mi), Math.abs(root.val - ma));
  mi = Math.min(mi, root.val);
  ma = Math.max(ma, root.val);
  diff = Math.max(diff, dfs(root.left, mi, ma));
  diff = Math.max(diff, dfs(root.right, mi, ma));
  return diff;
}
