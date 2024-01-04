/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function (nums) {
    let map = {};
    nums.forEach((key) => {
        if (map[key]) {
            map[key]++;
        } else {
            map[key] = 1;
        }
    })

    let ret = 0;
    let cul = 0;
    let values = Object.values(map);
    for (let i = values.length - 1; i >= 1; i--) {
        cul += values[i];
        ret = ret + cul;
    }
    return ret;
};