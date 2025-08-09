function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
  return startTime.reduce((acc, cur, i) => {
    return acc + (cur <= queryTime && queryTime <= endTime[i] ? 1 : 0);
  }, 0);
}
