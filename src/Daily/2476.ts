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
function binarySearch(arr: number[], val: number) {
  let left = 0;
  let right = arr.length - 1;
  let mid = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      return [mid, mid];
    }
    if (arr[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return [left - 1, left];
}

function closestNodes(root: TreeNode | null, queries: number[]): number[][] {
  const tree: number[] = [];
  const dfs = (node: TreeNode | null): void => {
    if (!node) {
      return;
    }
    dfs(node.left);
    tree.push(node.val);
    dfs(node.right);
  };
  dfs(root);
  const res: number[][] = [];
  for (const query of queries) {
    const index = binarySearch(tree, query);
    let left = index[0] < 0 ? -1 : tree[index[0]];
    let right = index[1] >= tree.length ? -1 : tree[index[1]];
    res.push([left, right]);
  }
  return res;
}
