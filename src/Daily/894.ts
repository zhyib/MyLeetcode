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

import { TreeNode } from "../utils/TreeNode";
function allPossibleFBT(n: number): Array<TreeNode | null> {
  const map: TreeNode[][] = new Array(21).fill(0).map(() => new Array());
  map[1] = [new TreeNode(0)];
  let index = 1;
  while (index <= n) {
    const temp: TreeNode[] = [];
    let sum = index - 1;
    for (let i = 1; i < index; i += 2) {
      for (let j = 0; j < map[i].length; j++) {
        for (let k = 0; k < map[sum - i].length; k++) {
          const root = new TreeNode(0);
          root.left = map[i][j];
          root.right = map[sum - i][k];
          temp.push(root);
        }
      }
    }
    if (temp.length !== 0) {
      map[index] = temp;
    }
    index += 2;
  }
  return map[n];
}

allPossibleFBT(7);
