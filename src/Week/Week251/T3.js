/**
 * @param {number[][]} students
 * @param {number[][]} mentors
 * @return {number}
 */
var maxCompatibilitySum = function(students, mentors) {
    const score = function (s, t) {
        let ret = 0;
        for (let i = 0; i < s.length; ++i) {
            if (s[i] === t[i]) {
                ret++;
            }
        }
        return ret;
    }

    const traverse = function (depth, temp) {
        if (depth > n) {
            ret = Math.max(temp, ret);
            return;
        }
        for (let i = 0; i < n; ++i) {
            if (!usedS[i]) {
                usedS[i] = true;
                for (let j = 0; j < n; ++j) {
                    if (!usedM[j]) {
                        usedM[j] = true;
                        temp += map[i][j];
                        traverse(depth + 1, temp);
                        temp -= map[i][j];
                        usedM[j] = false;
                    }
                }
                usedS[i] = false;
            }
        }
    }

    let n = students.length;
    let usedS = new Array(n).fill(false);
    let usedM = new Array(n).fill(false);
    let ret = 0;
    let map = new Array(n).fill(0).map(x => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            map[i][j] = score(students[i], mentors[j]);
        }
    }
    traverse(1, 0);
    return ret;
};

maxCompatibilitySum([[1,1,0],[1,0,1],[0,0,1]],
    [[1,0,0],[0,0,1],[1,1,0]])