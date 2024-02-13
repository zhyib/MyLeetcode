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

function inorderTraversal(root: TreeNode | null): number[] {
  return root !== null
    ? [
        ...inorderTraversal(root.left),
        root.val,
        ...inorderTraversal(root.right),
      ]
    : [];
}

function inorderTraversal2(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }
  const stack = new Array<TreeNode>();
  const ans = new Array<number>();
  let curr: TreeNode | null = root;
  while (stack.length > 0 || curr !== null) {
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }
    const node = stack.pop() as TreeNode;
    ans.push(node.val);
    curr = node.right;
  }
  return ans;
}
