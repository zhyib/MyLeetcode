/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    for (let i = 0; i < words.length; i++) {
        let len = words[i].length;
        let t = s.slice(0, len);
        if (t !== words[i]) {
            return false;
        } else {
            s = s.slice(len);
        }
        if (s.length === 0) {
            return true;
        }
    }
    return false;
};