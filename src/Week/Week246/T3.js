/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
    function collect(i, j) {
        if (grid2[i] !== undefined && grid2[i][j] === 1) {
            grid2[i][j] = 0;
            temp.push([i, j])
            collect(i - 1, j);
            collect(i + 1, j);
            collect(i, j - 1);
            collect(i, j + 1);
        }
    }

    let m = grid1.length;
    let n = grid1[0].length;
    let arr = [];
    let temp = [];
    let grid3 = new Array(m).fill(0).map(x => new Array(n).fill(0));
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            grid3[i][j] = grid2[i][j];
        }
    }
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (grid2[i][j] === 1) {
                collect(i, j);
                arr.push(temp);
                temp = [];
            }
        }
    }
    console.log(arr)
    let ret = 0;
    for (let i = 0; i < arr.length; ++i) {
        let j = 0;
        for (; j < arr[i].length; ++j) {
            let x = arr[i][j][0];
            let y = arr[i][j][1];
            if (grid1[x][y] & grid3[x][y]) {
            } else {
                break;
            }
        }
        if (j === arr[i].length) {
            ret++;
        }
    }
    return ret;
};

// countSubIslands(([[1,1,1,1,0,0],[1,1,0,1,0,0],[1,0,0,1,1,1],[1,1,1,0,0,1],[1,1,1,1,1,0],[1,0,1,0,1,0],[0,1,1,1,0,1],[1,0,0,0,1,1],[1,0,0,0,1,0],[1,1,1,1,1,0]]),(
//     [[1,1,1,1,0,1],[0,0,1,0,1,0],[1,1,1,1,1,1],[0,1,1,1,1,1],[1,1,1,0,1,0],[0,1,1,1,1,1],[1,1,0,1,1,1],[1,0,0,1,0,1],[1,1,1,1,1,1],[1,0,0,1,0,0]]))

countSubIslands(([[1, 1, 1, 0, 0], [0, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 1, 0, 1, 1]]),
    ([[1, 1, 1, 0, 0], [0, 0, 1, 1, 1], [0, 1, 0, 0, 0], [1, 0, 1, 1, 0], [0, 1, 0, 1, 0]]))