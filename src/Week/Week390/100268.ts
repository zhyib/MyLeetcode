function stringIndices(
  wordsContainer: string[],
  wordsQuery: string[]
): number[] {
  class TreeNode {
    val: string;
    index: number;
    children: Record<string, TreeNode>;

    constructor(val: string, index: number) {
      this.val = val;
      this.index = index;
      this.children = {};
    }
  }

  function buildTree(node: TreeNode, str: string, curr: number, index: number) {
    if (curr === -1) {
      return;
    }
    if (node.children[str.charAt(curr)] === undefined) {
      node.children[str.charAt(curr)] = new TreeNode(str.charAt(curr), index);
    }
    buildTree(node.children[str.charAt(curr)], str, curr - 1, index);
  }

  function searchTree(node: TreeNode, str: string, curr: number): number {
    if (curr === -1) {
      return node.index;
    }
    if (node.children[str.charAt(curr)] === undefined) {
      return node.index;
    } else {
      return searchTree(node.children[str.charAt(curr)], str, curr - 1);
    }
  }

  const newContainer: [string, number][] = [];
  for (let i = 0; i < wordsContainer.length; i++) {
    newContainer.push([wordsContainer[i], i]);
  }

  newContainer.sort((a, b) =>
    a[0].length !== b[0].length ? a[0].length - b[0].length : 1
  );
  const root = new TreeNode("", newContainer[0][1]);
  for (let i = 0; i < newContainer.length; i++) {
    buildTree(
      root,
      newContainer[i][0],
      newContainer[i][0].length - 1,
      newContainer[i][1]
    );
  }
  const ans: number[] = [];
  for (let i = 0; i < wordsQuery.length; i++) {
    ans.push(searchTree(root, wordsQuery[i], wordsQuery[i].length - 1));
  }
  return ans;
}
