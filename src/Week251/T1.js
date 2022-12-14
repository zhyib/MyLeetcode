/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let str = '';
    for (let i = 0; i < s.length; ++i) {
        str += '' + (s.charCodeAt(i) - 96);
    }
    let ret = 0;
    for (let ss of str) {
        ret += Number(ss);
    }
    while (k > 1) {
        k--;
        let temp = 0;
        for (let ss of String(ret)) {
            temp += Number(ss);
        }
        ret = temp;
    }
    return ret;
};