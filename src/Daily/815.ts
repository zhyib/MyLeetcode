function numBusesToDestination(routes: number[][], source: number, target: number): number {
  // 记录经过车站 x 的公交车编号
  const stopToBuses = new Map<number, number[]>();
  for (let i = 0; i < routes.length; i++) {
    for (const x of routes[i]) {
      if (!stopToBuses.has(x)) {
        stopToBuses.set(x, [i]);
      } else {
        stopToBuses.get(x)!.push(i);
      }
    }
  }

  // 小优化：如果没有公交车经过起点或终点，直接返回
  if (!stopToBuses.has(source) || !stopToBuses.has(target)) {
    // 注意原地 TP 的情况
    return source !== target ? -1 : 0;
  }

  // BFS
  const dis = new Map();
  dis.set(source, 0);
  const q = Array(stopToBuses.size); // 用数组模拟队列
  q[0] = source;
  let ql = 0,
    qr = 1; // 队首队尾，左闭右开区间
  while (ql < qr) {
    const x = q[ql++]; // 当前在车站 x
    const disX = dis.get(x);
    for (const i of stopToBuses.get(x)!) {
      // 遍历所有经过车站 x 的公交车 i
      if (routes[i].length !== 0) {
        for (const y of routes[i]) {
          // 遍历公交车 i 的路线
          if (!dis.has(y)) {
            // 没有访问过车站 y
            dis.set(y, disX + 1); // 从 x 站上车然后在 y 站下车
            q[qr++] = y;
          }
        }
        routes[i] = []; // 标记 routes[i] 遍历过
      }
    }
  }

  return dis.get(target) ?? -1;
}
