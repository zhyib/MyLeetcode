import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

function mincostToHireWorkers(
  quality: number[],
  wage: number[],
  k: number
): number {
  const n = quality.length;
  const h = new Array(n).fill(0).map((_, i) => i);
  // 性价比降序
  // quality / wage 
  h.sort((a, b) => {
    return quality[b] * wage[a] - quality[a] * wage[b];
  });
  let res = 1e9;
  let total = 0.0;
  const pq = new MaxPriorityQueue();
  for (let i = 0; i < k - 1; i++) {
    total += quality[h[i]];
    pq.enqueue(quality[h[i]]);
  }
  for (let i = k - 1; i < n; i++) {
    let index = h[i];
    total += quality[index];
    pq.enqueue(quality[index]);
    const curr = (wage[index] / quality[index]) * total;
    res = Math.min(res, curr);
    total -= pq.dequeue().element;
  }
  return res;
}
