function maximumSum(arr: number[]): number {
  let dp0 = arr[0];
  let dp1 = 0;
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    dp1 = Math.max(dp0, dp1 + arr[i]);
    dp0 = Math.max(dp0, 0) + arr[i];
    res = Math.max(res, Math.max(dp0, dp1));
  }
  return res;
}
