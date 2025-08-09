function minimumTime(time: number[], totalTrips: number): number {
  // 判断 t 时间内是否可以完成 totalTrips 趟旅途
  const check = (t: number): boolean => {
    let cnt = 0;
    for (const period of time) {
      cnt += Math.floor(t / period);
    }
    return cnt >= totalTrips;
  };

  // 二分查找下界与上界
  let l = 1;
  let r = totalTrips * Math.max(...time);
  // 二分查找寻找满足要求的最小的 t
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (check(mid)) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
}
