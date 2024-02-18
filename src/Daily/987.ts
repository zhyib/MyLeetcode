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

function verticalTraversal(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }
  const map: Record<number, Record<number, number[]>> = {};
  let stack = new Array<[TreeNode, number]>();
  let depth = 0;
  stack.push([root, 0]);
  while (stack.length > 0) {
    depth += 1;
    const stack2 = new Array<[TreeNode, number]>();
    for (const [node, offset] of stack) {
      if (map[offset]) {
        if (map[offset][depth]) {
          map[offset][depth].push(node.val);
        } else {
          map[offset][depth] = [node.val];
        }
      } else {
        map[offset] = {};
        map[offset][depth] = [node.val];
      }
      if (node.left) {
        stack2.push([node.left, offset - 1]);
      }
      if (node.right) {
        stack2.push([node.right, offset + 1]);
      }
    }
    stack = stack2;
  }
  const sortedOffset = Object.entries(map)
    .sort((a, b) => {
      return Number(a[0]) - Number(b[0]);
    })
    .map((entry) => entry[1]);
  return sortedOffset.map((sameOffset) =>
    Object.values(sameOffset)
      .map((sameDepth) => sameDepth.sort((a, b) => a - b))
      .flat()
  );
}
