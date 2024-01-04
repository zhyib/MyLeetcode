/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let n = nums.length;
    let ret = 0;
    let sub = [[]];
    for (let i = 0; i < n; i++) {
        let l = sub.length;
        for (let j = 0; j < l; j++) {
            sub.push([...sub[j], nums[i]]);
        }
    }

    for (const s of sub) {
        let t = 0;
        for (const i of s) {
            t ^= i;
        }
        ret += t;
    }
    return ret;
};