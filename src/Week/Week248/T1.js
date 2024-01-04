/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    return new Array(nums.length).fill(0).map((val, ind) => nums[nums[ind]]);
};