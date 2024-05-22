function countTestedDevices(batteryPercentages: number[]): number {
  return batteryPercentages.reduce(
    (pre, cur) => (cur - pre > 0 ? pre + 1 : pre),
    0
  );
}
