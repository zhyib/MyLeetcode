function numberOfEmployeesWhoMetTarget(
  hours: number[],
  target: number
): number {
  return hours.reduce((pre, cur) => (pre += cur >= target ? 1 : 0), 0);
}
