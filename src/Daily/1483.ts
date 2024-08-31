class TreeAncestor {
  LOG = 16;
  ancestors: number[][];

  constructor(n: number, parent: number[]) {
    this.ancestors = new Array(n)
      .fill(0)
      .map(() => new Array(this.LOG).fill(-1));
    for (let i = 0; i < n; i++) {
      this.ancestors[i][0] = parent[i];
    }
    for (let j = 1; j < this.LOG; j++) {
      for (let i = 0; i < n; i++) {
        if (this.ancestors[i][j - 1] !== -1) {
          this.ancestors[i][j] =
            this.ancestors[this.ancestors[i][j - 1]][j - 1];
        }
      }
    }
  }

  getKthAncestor(node: number, k: number): number {
    for (let j = 0; j < this.LOG; j++) {
      if (((k >> j) & 1) !== 0) {
        node = this.ancestors[node][j];
        if (node === -1) {
          return -1;
        }
      }
    }
    return node;
  }
}

/**
 * Your TreeAncestor object will be instantiated and called as such:
 * var obj = new TreeAncestor(n, parent)
 * var param_1 = obj.getKthAncestor(node,k)
 */
