import { MinPriorityQueue } from '@datastructures-js/priority-queue';

function trapRainWater(heightMap: number[][]): number {
  const m = heightMap.length, n = heightMap[0].length;
  const pq = new MinPriorityQueue<[number, number, number]>(e => e[0]);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
        pq.enqueue([heightMap[i][j], i, j]);
        heightMap[i][j] = -1; // 标记 (i,j) 访问过
      }
    }
  }

  let ans = 0;
  while (!pq.isEmpty()) {
    const [minHeight, i, j] = pq.dequeue()!; // 去掉短板
    for (const [x, y] of [[i, j - 1], [i, j + 1], [i - 1, j], [i + 1, j]]) {
      if (0 <= x && x < m && 0 <= y && y < n && heightMap[x][y] >= 0) { // (x,y) 没有访问过
        // 如果 (x,y) 的高度小于 minHeight，那么接水量为 minHeight - heightMap[x][y]
        ans += Math.max(minHeight - heightMap[x][y], 0);
        // 给木桶新增一块高为 max(minHeight, heightMap[x][y]) 的木板
        pq.enqueue([Math.max(minHeight, heightMap[x][y]), x, y]);
        heightMap[x][y] = -1; // 标记 (x,y) 访问过
      }
    }
  }
  return ans;
};
