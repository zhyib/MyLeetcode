/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = i + 1;
    }

    let inx = 0;
    while (arr.length !== 1) {
        inx = (inx + k - 1) % arr.length;
        arr.splice(inx, 1);
    }
    return arr[0];
};