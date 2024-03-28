class Graph {
  matrix: number[][] = [];
  n: number;

  constructor(n: number, edges: number[][]) {
    this.n = n;
    this.matrix = new Array(n)
      .fill(0)
      .map(() => new Array(n).fill(Number.MAX_VALUE));
    edges.forEach((edge) => {
      this.matrix[edge[0]][edge[1]] = edge[2];
    });
    for (let i = 0; i < n; i++) {
      this.matrix[i][i] = 0;
    }
    for (let k = 0; k < n; k++) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          this.matrix[i][j] = Math.min(
            this.matrix[i][j],
            this.matrix[i][k] + this.matrix[k][j]
          );
        }
      }
    }
  }

  addEdge(edge: number[]): void {
    const [start, end, cost] = edge;
    if (cost > this.matrix[start][end]) {
      return;
    }
    this.matrix[start][end] = cost;
    for (let i = 0; i < this.n; i++) {
      for (let j = 0; j < this.n; j++) {
        this.matrix[i][j] = Math.min(
          this.matrix[i][j],
          this.matrix[i][start] + cost + this.matrix[end][j]
        );
      }
    }
  }

  shortestPath(node1: number, node2: number): number {
    return this.matrix[node1][node2] === Number.MAX_VALUE
      ? -1
      : this.matrix[node1][node2];
  }
}

/**
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */
