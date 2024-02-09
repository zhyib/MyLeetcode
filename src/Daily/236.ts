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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root || root === p || root === q) {
    return root;
  }
  if (p === null || q === null) {
    return null;
  }
  const stack = new Array<TreeNode>();
  let pTrace = new Array<TreeNode>();
  let qTrace = new Array<TreeNode>();
  let count = 0;

  function dfs(node: TreeNode | null) {
    if (count === 2) {
      return;
    }
    if (node === null) {
      return;
    }
    stack.push(node);
    if (node.val === p?.val) {
      pTrace = [...stack];
      count += 1;
    }
    if (node.val === q?.val) {
      qTrace = [...stack];
      count += 1;
    }
    dfs(node.left);
    dfs(node.right);
    stack.pop();
  }

  dfs(root);
  for (let i = Math.min(pTrace.length, qTrace.length) - 1; i >= 0; i--) {
    if (pTrace[i] === qTrace[i]) {
      return pTrace[i];
    }
  }
  return root;
}
