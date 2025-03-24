function distanceBetweenBusStops(distance: number[], start: number, destination: number): number {
  const sum = distance.reduce((a, b) => a + b, 0);
  let s = Math.min(start, destination);
  let d = Math.max(start, destination);
  let diff = 0;
  for (let i = s; i < d; i++) {
    diff += distance[i];
  }
  return Math.min(diff, sum - diff);
}
