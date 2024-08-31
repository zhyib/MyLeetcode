function getWinner(arr: number[], k: number): number {
  let max = arr[0];
  let win = 0;
  for (let i = 1; i < arr.length; i++) {
    if (max > arr[i]) {
      win += 1;
    } else {
      max = arr[i];
      win = 1;
    }
    if (win === k) {
      return max;
    }
  }
  return max;
}
