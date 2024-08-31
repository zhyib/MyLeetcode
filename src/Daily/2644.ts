function maxDivScore(nums: number[], divisors: number[]): number {
  let cnt = -1,
    ans = 0;

  for (let i = 0; i < divisors.length; i++) {
    let tmp = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] % divisors[i] == 0) {
        tmp++;
      }
    }

    if (tmp > cnt || (tmp == cnt && divisors[i] < ans)) {
      cnt = tmp;
      ans = divisors[i];
    }
  }
  return ans;
}
