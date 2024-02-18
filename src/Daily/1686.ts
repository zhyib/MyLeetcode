function stoneGameVI(aliceValues: number[], bobValues: number[]): number {
  const arr = aliceValues.map((v, i) => [v, bobValues[i]]);
  arr.sort((a, b) => b[0] + b[1] - (a[0] + a[1]));
  let alice = 0;
  let bob = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      alice += arr[i][0];
    } else {
      bob += arr[i][1];
    }
  }
  console.log(arr);
  console.log(alice, bob);
  if (alice > bob) {
    return 1;
  }
  if (alice === bob) {
    return 0;
  }
  return -1;
}
