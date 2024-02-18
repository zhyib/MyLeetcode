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

function preorderTraversal(root: TreeNode | null): number[] {
  return root !== null
    ? [
        root.val,
        ...preorderTraversal(root.left),
        ...preorderTraversal(root.right),
      ]
    : [];
}

function preorderTraversal2(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }
  const stack = new Array<TreeNode>();
  const ans = new Array<number>();
  stack.push(root);
  while (stack.length > 0) {
    const node = stack.pop() as TreeNode;
    ans.push(node.val);
    if (node.right !== null) {
      stack.push(node.right);
    }
    if (node.left !== null) {
      stack.push(node.left);
    }
  }
  return ans;
}
