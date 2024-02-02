function alternatingSubarray(nums: number[]): number {
    let res = -1;
    const n = nums.length;
    let firstIndex = 0;
    for (let i = 1; i < n; i++) {
        const length = i - firstIndex + 1;
        if (nums[i] - nums[firstIndex] === (length - 1) % 2) {
            res = Math.max(res, length);
        } else {
            if (nums[i] - nums[i - 1] === 1) {
                firstIndex = i - 1;
                res = Math.max(res, 2);
            } else {
                firstIndex = i;
            }
        }
    }
    return res;
};
