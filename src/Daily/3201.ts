function maximumLength(nums: number[]): number {
  let odd = 0;
  let even = 0;
  let arr: number[] = [];
  for (const num of nums) {
    if (num % 2 === 0) {
      even++;
    } else {
      odd++;
    }
    if (arr.length === 0) {
      arr.push(num);
    } else if (arr[arr.length - 1] % 2 !== num % 2) {
      arr.push(num);
    }
  }
  return Math.max(odd, even, arr.length);
}
