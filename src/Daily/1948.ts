class DictNode {
  children: Map<string, DictNode> = new Map();
  name: string = "";
  deleted: boolean = false;

  constructor(name?: string) {
    this.name = name ?? "";
  }
}

function deleteDuplicateFolder(paths: string[][]): string[][] {
  const root = new DictNode();
  for (const path of paths) {
    let node = root;
    for (const name of path) {
      if (!node.children.has(name)) {
        node.children.set(name, new DictNode(name));
      }
      node = node.children.get(name) as DictNode;
    }
  }

  const expressions: Map<string, DictNode> = new Map();
  const getExpression = (node: DictNode): string => {
    if (node.children.size === 0) {
      return node.name;
    }
    const children = Array.from(node.children.values())
      .map((item) => `(${getExpression(item)})`)
      .sort((a, b) => a.localeCompare(b));
    const subTreeName = children.join("");
    const existNode = expressions.get(subTreeName);
    if (existNode === undefined) {
      expressions.set(subTreeName, node);
    } else {
      node.deleted = true;
      existNode.deleted = true;
    }
    return node.name + subTreeName;
  };

  for (const node of root.children.values()) {
    getExpression(node);
  }

  const ans: string[][] = [];
  const dfs = (node: DictNode, path: string[]): void => {
    if (node.deleted) {
      return;
    }
    path.push(node.name);
    ans.push([...path]);
    const children = node.children.values();
    for (const child of children) {
      dfs(child, [...path]);
    }
    return;
  };

  for (const child of root.children.values()) {
    dfs(child, []);
  }
  return ans;
}

deleteDuplicateFolder([
  ["a"],
  ["c"],
  ["d"],
  ["a", "b"],
  ["c", "b"],
  ["d", "a"],
]);
