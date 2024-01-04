/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minAbsoluteSumDiff = function(nums1, nums2) {
    let sum = 0;
    let maxIndex = -1;
    let max = -1;
    let n = nums1.length;
    for (let i = 0; i < n; i++) {
        let diff = Math.abs(nums1[i] - nums2[i]);
        sum += (diff % 1000000007);
        sum %= 1000000007;
        if (diff > max) {
            maxIndex = i;
            max = diff;
        }
    }

    if (sum === 0) {
        return sum;
    }

    let target = nums2[maxIndex];
    nums1.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        if (nums1[i] >= target) {
            if (i === 0) {
                let ret = sum - max + Math.abs(nums1[i] - target);
                return ret < 0 ? ret + 1000000007 : ret;
            } else {
                let pre = Math.abs(nums1[i - 1] - target);
                let nex = Math.abs(nums1[i] - target);
                let ret = sum - max;
                ret += pre > nex ? nex : pre;
                return ret < 0 ? ret + 1000000007 : ret;
            }
        }
    }
    let ret = sum - max + Math.abs(nums1[nums1.length - 1] - target);
    return ret < 0 ? ret + 1000000007 : ret;
};