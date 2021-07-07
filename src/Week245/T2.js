/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
var maximumRemovals = function (s, p, removable) {
    function check(s, p, mid, removable) {
        let map = new Map();
        for (let i = 0; i <= mid; ++i) {
            map.set(removable[i], true);
        }
        let curr = 0;
        for (let i = 0; i < s.length; ++i) {
            if (!map.has(i)) {
                if (s[i] === p[curr]) {
                    curr++;
                    if (curr === p.length) {
                        return true;
                    }
                }
            }
        }
        return curr === p.length;
    }

    function recurse(start, end) {
        if (start === end) {
            if (check(s, p, start, removable)) {
                return start;
            } else {
                return start - 1;
            }
        }

        let mid = Math.floor((start + end) / 2);
        if (check(s, p, mid, removable)) {
            return recurse(mid + 1, end);
        } else {
            return recurse(start, mid);
        }
    }

    removable.unshift(-1);
    let n = removable.length;
    return recurse(0, n - 1);
};

console.log(maximumRemovals(
    "qlevcvgzfpryiqlwy",
    "qlecfqlw",
    [12, 5],
))