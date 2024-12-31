function countBeautifulPairs(nums: number[]): number {
  function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
  }

  let ans = 0;
  const count = new Array<number>(10).fill(0);
  for (let x of nums) {
    for (let y = 1; y < 10; y++) {
      if (count[y] > 0 && gcd(y, x % 10) == 1) {
        ans += count[y];
      }
    }
    count[String(x).charCodeAt(0) - 48]++; // 统计最高位的出现次数
  }
  return ans;
}
