var longestSubarray = function (nums) {
  let ans = 0,
    mx = 0,
    cnt = 0;
  for (const x of nums) {
    if (x > mx) {
      // 发现新的 mx，重新统计所有内容
      mx = x;
      ans = cnt = 1;
    } else if (x === mx) {
      cnt++;
      ans = Math.max(ans, cnt);
    } else {
      cnt = 0; // 连续 mx 断开了，重新统计
    }
  }
  return ans;
};
