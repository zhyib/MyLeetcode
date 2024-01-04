/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
    if (s.length <= k) {
        return s;
    } else {
        let arr = [];
        let ind = 0;
        for (let i = k; i < s.length; i+=k) {
            let piece = s.slice(ind, i);
            let sum = piece.split('').reduce((pre, cur) => {
                return Number(pre) + Number(cur);
            }, 0)
            arr.push(sum);
            ind += k;
        }
        if (ind < s.length) {
            let piece = s.slice(ind, s.length);
            let sum = piece.split('').reduce((pre, cur) => {
                return Number(pre) + Number(cur);
            }, 0)
            arr.push(sum);
        }
        return digitSum(arr.join(''), k);
    }
};