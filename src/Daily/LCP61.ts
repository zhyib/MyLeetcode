function temperatureTrend(
  temperatureA: number[],
  temperatureB: number[]
): number {
  let max = 0;
  let count = 0;
  for (let i = 0; i < temperatureA.length - 1; i++) {
    if (
      Math.sign(temperatureA[i] - temperatureA[i + 1]) ===
      Math.sign(temperatureB[i] - temperatureB[i + 1])
    ) {
      count++;
    } else {
      max = Math.max(max, count);
      count = 0;
    }
  }
  return Math.max(max, count);
}
