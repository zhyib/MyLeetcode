const countPairs = function (nums, low, high) {
    // 1803 - 统计异或值在范围内的数对有多少
    // 嗯算
    let ret = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let xor = nums[i] ^ nums[j];
            if (xor >= low && xor <= high) {
                ret++;
            }
        }
    }
    return ret;
};