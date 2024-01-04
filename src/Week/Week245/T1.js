/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
    let map = {};
    let n = words.length;
    for (let i = 0; i < words.length; ++i) {
        for (let j = 0; j < words[i].length; j++) {
            map[words[i][j]] = map[words[i][j]] ? map[words[i][j]] + 1 : 1;
        }
    }
    let values = Object.values(map);
    for (let key of values) {
        if (key / n !== Math.floor(key / n)) {
            return false;
        }
    }
    return true;
};