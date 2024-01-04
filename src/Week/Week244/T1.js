/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    const t = target.flat(1).join('');

    let str0 = mat.flat(1).join('');
    if (str0 === t) {
        return true;
    }

    let n = mat.length;
    let str1 = '';
    for (let i = 0; i < n; i++) {
        for (let j = n - 1; j >= 0; j--) {
            str1 += mat[j][i];
        }
    }
    if (str1 === t) {
        return true;
    }

    let str2 = '';
    for (let i = n - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            str2 += mat[i][j];
        }
    }
    if (str2 === t) {
        return true;
    }

    let str3 = '';
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j < n; j++) {
            str3 += mat[j][i];
        }
    }
    if (str3 === t) {
        return true;
    }

    return false;
};

console.log(findRotation([[1,1],[0,0]],[[0,1],[0,1]]))