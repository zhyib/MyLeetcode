function maximumPrimeDifference(nums: number[]): number {
  const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ];
  let indices: number[] = [];

  nums.forEach((num, index) => {
    if (primes.includes(num)) {
      indices.push(index);
    }
  });
  return indices[indices.length - 1] - indices[0];
}
