function relocateMarbles(nums: number[], moveFrom: number[], moveTo: number[]): number[] {
  const map: Map<number, boolean> = new Map();
  for (const num of nums) {
    map.set(num, true);
  }
  for (let i = 0; i < moveFrom.length; i++) {
    map.delete(moveFrom[i]);
    map.set(moveTo[i], true);
  }
  return Array.from(map.keys()).sort((a, b) => a - b);
}
