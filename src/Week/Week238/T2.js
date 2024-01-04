/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    nums.sort((a, b) => a - b);
    let arr = new Array(nums.length - 1);
    for (let i = 1; i < nums.length; i++) {
        arr[i - 1] = nums[i] - nums[i - 1];
    }



    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        let pre = 0;
        let times = 1;
        for (let j = i; j >= 0; j--) {
            // System.out.print(sum);
            // System.out.print(pre);
            // System.out.println(times);

            pre += arr[j];
            sum += pre;

            // System.out.print(sum);
            // System.out.print(pre);
            // System.out.println(times);
            times++;
            if (sum > k) {
                max = Math.max(times - 1, max);
                break;
            }
        }
        if (sum <= k) {
            max = Math.max(times, max);
        }
    }
    return max;
};
