import { MinPriorityQueue } from "@datastructures-js/priority-queue";

function minimumTime(n: number, edges: number[][], disappear: number[]): number[] {
  const g: number[][][] = Array.from({ length: n }, () => []);
  for (const [x, y, wt] of edges) {
    g[x].push([y, wt]);
    g[y].push([x, wt]);
  }

  const dis = Array(n).fill(-1);
  dis[0] = 0;
  const pq = new MinPriorityQueue({ priority: (p: number[]) => p[0] });
  pq.enqueue([0, 0]);
  while (!pq.isEmpty()) {
    const [dx, x] = pq.dequeue().element;
    if (dx > dis[x]) {
      // x 之前出堆过
      continue;
    }
    for (let [y, wt] of g[x]) {
      let new_dis = dx + wt;
      if (new_dis < disappear[y] && (dis[y] < 0 || new_dis < dis[y])) {
        dis[y] = new_dis; // 更新 x 的邻居的最短路
        pq.enqueue([new_dis, y]);
      }
    }
  }
  return dis;
}
