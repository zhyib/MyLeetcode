function findClosest(x: number, y: number, z: number): number {
  const time = Math.abs(x - z) - Math.abs(y - z);
  return time === 0 ? 0 : (time > 0 ? 2 : 1);
};
