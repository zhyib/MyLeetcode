import { TreeNode } from "../utils/TreeNode";
function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
  const buildTreeNode = (baskets: number[]): TreeNode | null => {
    if (baskets.length === 0) {
      return null;
    }
    if (baskets.length === 1) {
      return new TreeNode(baskets[0]);
    }
    const treeNode = new TreeNode();
    const mid = Math.floor(baskets.length / 2);
    treeNode.left = buildTreeNode(baskets.slice(0, mid));
    treeNode.right = buildTreeNode(baskets.slice(mid));
    treeNode.val = Math.max(
      treeNode.left?.val ?? -1,
      treeNode.right?.val ?? -1
    );
    return treeNode;
  };

  const find = (current: TreeNode, target: number) => {
    if (current === null) {
      return -1;
    }
    let toFind = -1;
    if (current.val >= target) {
      if (current.left === null && current.right === null) {
        // leaf
        toFind = current.val;
        current.val = -1;
      } else if (current.left && current.left.val >= target) {
        toFind = find(current.left, target);
      } else if (
        toFind === -1 &&
        current.right &&
        current.right.val >= target
      ) {
        toFind = find(current.right, target);
      }
      current.val = Math.max(current.left?.val ?? -1, current.right?.val ?? -1);
    }
    return toFind;
  };

  const treeNode = buildTreeNode(baskets) as TreeNode;
  let ans = 0;
  for (const fruit of fruits) {
    const result = find(treeNode, fruit);
    if (result === -1) {
      ans++;
    }
  }
  return ans;
}

numOfUnplacedFruits([4, 2, 5], [3, 5, 4]);
