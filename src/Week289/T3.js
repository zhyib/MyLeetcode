/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxTrailingZeros = function(grid) {
    function factor(num, divider) {
        if (num === 1) {
            return 0;
        }
        let sum = 0;
        while (num / divider) {
            num /= divider;
            if (num === Math.floor(num)) {
                sum++;
            } else {
                break;
            }
        }
        return sum;
    }

    let m = grid.length;
    let n = grid[0].length;
    let f = new Array(m).fill(0).map(value => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; n++) {
            f[i][j] = []
        }
    }
};