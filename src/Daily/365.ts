function canMeasureWater(
  jug1Capacity: number,
  jug2Capacity: number,
  targetCapacity: number
): boolean {
  function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
  }

  if (jug1Capacity + jug2Capacity < targetCapacity) {
    return false;
  }
  return targetCapacity % gcd(jug1Capacity, jug2Capacity) == 0;
}
