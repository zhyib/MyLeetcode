function totalCost(costs: number[], k: number, candidates: number): number {
  const n = costs.length;
  const q = new PriorityQueue({
    compare: (e1, e2) => {
      if (e1[0] < e2[0] || (e1[0] == e2[0] && e1[1] < e2[1])) {
        return -1;
      }
      return 1;
    },
  });
  let left = candidates - 1,
    right = n - candidates;
  if (left + 1 < right) {
    for (let i = 0; i <= left; ++i) {
      q.enqueue([costs[i], i]);
    }
    for (let i = right; i < n; ++i) {
      q.enqueue([costs[i], i]);
    }
  } else {
    for (let i = 0; i < n; ++i) {
      q.enqueue([costs[i], i]);
    }
  }
  let ans = 0;
  for (let i = 0; i < k; ++i) {
    const [cost, id] = q.dequeue();
    ans += cost;
    if (left + 1 < right) {
      if (id <= left) {
        ++left;
        q.enqueue([costs[left], left]);
      } else {
        --right;
        q.enqueue([costs[right], right]);
      }
    }
  }
  return ans;
}
