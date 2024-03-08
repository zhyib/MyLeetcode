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

function constructFromPrePost(
  preorder: number[],
  postorder: number[]
): TreeNode | null {
  if (preorder.length === 0) {
    return null;
  }
  const node = new TreeNode(preorder[0]);
  preorder.shift();
  postorder.pop();
  if (preorder.length > 0) {
    if (postorder[postorder.length - 1] === preorder[0]) {
      node.left = constructFromPrePost(preorder, postorder);
    } else {
      const indexInPre = preorder.indexOf(postorder[postorder.length - 1]);
      const indexInPost = postorder.indexOf(preorder[0]);
      node.left = constructFromPrePost(
        preorder.slice(0, indexInPre),
        postorder.slice(0, indexInPost + 1)
      );
      node.right = constructFromPrePost(
        preorder.slice(indexInPre),
        postorder.slice(indexInPost + 1)
      );
    }
  }
  return node;
}
