function numberOfBoomerangs(points: number[][]): number {
  let sum = 0;
  for (let i = 0; i < points.length; i++) {
    const length: Record<number, number> = {};
    for (let j = 0; j < points.length; j++) {
      if (j == i) {
        continue;
      }
      const x1 = points[i][0];
      const y1 = points[i][1];
      const x2 = points[j][0];
      const y2 = points[j][1];
      const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
      length[distance] = length[distance]? length[distance] + 1 : 1;
    }
    Object.values(length).forEach(v => {
      sum += v * (v - 1);
    })
  }
  return sum;
};
