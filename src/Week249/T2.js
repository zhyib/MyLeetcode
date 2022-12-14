/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
    let ret = 0;
    let visited = new Set();
    for (let i = 0; i < s.length; i++) {
        if (!visited.has(s[i])) {
            visited.add(s[i]);
            for (let j = s.length - 1; j >= i + 2; j--) {
                if (s[i] === s[j]) {
                    let set = new Set();
                    for (let k = i + 1; k < j; k++) {
                        set.add(s[k]);
                    }
                    ret += set.size;
                    break;
                }
            }
        }
    }
    return ret;
};

countPalindromicSubsequence('aabca')