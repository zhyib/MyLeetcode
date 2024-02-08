function minMovesToCaptureTheQueen(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number
): number {
  let min = 2;
  if (a === e) {
    if (a === c) {
      if ((d - b) * (f - d) < 0) {
        min = 1;
      }
    } else {
      min = 1;
    }
  }
  if (b === f) {
    if (b === d) {
      if ((c - a) * (e - c) < 0) {
        min = 1;
      }
    } else {
      min = 1;
    }
  }
  if (Math.abs((e % 2) - (f % 2)) === Math.abs((c % 2) - (d % 2))) {
    if (Math.abs((c - e) / (d - f)) === 1) {
      if ((c - e) / (d - f) === (c - a) / (d - b) && (a - c) * (e - a) > 0) {
      } else {
        min = 1;
      }
    }
  }
  return min;
}

// console.log(minMovesToCaptureTheQueen(1, 1, 8, 8, 2, 3)); // 2
// console.log(minMovesToCaptureTheQueen(5, 3, 3, 4, 5, 2)); // 1
// console.log(minMovesToCaptureTheQueen(1, 6, 3, 3, 5, 6)); // 1
console.log(minMovesToCaptureTheQueen(4, 3, 3, 3, 2, 3)); // 2
// console.log(minMovesToCaptureTheQueen(5, 8, 8, 8, 1, 8)); // 1
console.log(minMovesToCaptureTheQueen(1, 7, 1, 4, 1, 1)); // 2
// console.log(minMovesToCaptureTheQueen(1, 1, 1, 4, 1, 8)); // 2
console.log(minMovesToCaptureTheQueen(6, 8, 6, 6, 6, 3)); // 2
