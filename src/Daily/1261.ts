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

class FindElements {
  vals: number[];
  treeRoot: TreeNode | null;

  constructor(root: TreeNode | null) {
    function dfs(node: TreeNode | null, x: number, arr: number[]) {
      if (node === null) {
        return null;
      }
      arr.push(x);
      const newNode = new TreeNode(x);
      newNode.left = dfs(node.left, 2 * x + 1, arr);
      newNode.right = dfs(node.right, 2 * x + 2, arr);
      return newNode;
    }
    this.vals = [];
    this.treeRoot = dfs(root, 0, this.vals);
  }

  find(target: number): boolean {
    return this.vals.includes(target);
  }
}

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
