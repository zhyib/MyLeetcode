/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let map = [[0, 0], [0, 0]];
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            if (s[i] === '0') {
                // 偶数位 0
                map[0][0]++;
            } else {
                // 偶数位 1
                map[0][1]++;
            }
        } else {
            if (s[i] === '0') {
                // 奇数位 0
                map[1][0]++;
            } else {
                // 奇数位 1
                map[1][1]++;
            }
        }
    }

    let ret = s.length;
    if (map[0][1] === map[1][0]) {
        ret = Math.min(map[0][1], ret);
    }
    if (map[0][0] === map[1][1]) {
        ret = Math.min(map[1][0], ret);
    }

    return ret === s.length ? -1 : ret;
};