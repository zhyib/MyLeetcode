/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ret = new Array(nums.length * 2);
    let n = nums.length;
    for (let i = 0; i < nums.length; i++) {
        ret[i] = nums[i];
        ret[i + n] = nums[i];
    }
    return ret;
};