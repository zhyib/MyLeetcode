function maximumTotalCost(nums: number[]): number {
  let arr: number[][] = [];
  arr.push([]);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      arr[arr.length - 1].push(nums[i]);
    } else {
      arr.push([nums[i]]);
    }
  }

  const calculate = (nums: number[]) => {
    let sum = nums.reduce(
      (prev, curr, index) => prev + curr * Math.pow(-1, index),
      0
    );
    return Math.max(sum, nums[0] - (sum - nums[0]));
  };

  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 0) {
      continue;
    }
    if (arr[i].length === 1) {
      ans += arr[i][0];
    } else {
      ans += calculate(arr[i]);
    }
  }
  return ans;
}

maximumTotalCost([4, -5, -3, -2, -4, 4]);
