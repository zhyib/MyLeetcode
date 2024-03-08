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
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  function recourse(inorder: number[]): TreeNode | null {
    const val = postorder[postorder.length - 1];
    const node = new TreeNode(val);
    let index = inorder.indexOf(val);
    if (index < 0) {
      return null;
    }
    postorder.pop();
    node.right = recourse(inorder.slice(index + 1));
    node.left = recourse(inorder.slice(0, index));
    return node;
  }
  return recourse(inorder);
}
