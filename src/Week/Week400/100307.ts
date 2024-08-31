function minimumChairs(s: string): number {
  let max = 0;
  let now = 0;
  s.split("").forEach((item) => {
    if (item === "E") {
      now++;
      max = Math.max(max, now);
    } else {
      now--;
    }
  });
  return max;
}
