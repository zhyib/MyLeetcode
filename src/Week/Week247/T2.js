/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function (grid, k) {
    let m = grid.length;
    let n = grid[0].length;
    let nlayer = Math.min(m / 2, n / 2);   // 层数
    // 从左上角起逆时针枚举每一层
    for (let layer = 0; layer < nlayer; ++layer) {
        let r = [];
        let c = [];
        let val = [];   // 每个元素的行下标，列下标与数值
        for (let i = layer; i < m - layer - 1; ++i) {   // 左
            r.push(i);
            c.push(layer);
            val.push(grid[i][layer]);
        }
        for (let j = layer; j < n - layer - 1; ++j) {   // 下
            r.push(m - layer - 1);
            c.push(j);
            val.push(grid[m - layer - 1][j]);
        }
        for (let i = m - layer - 1; i > layer; --i) {   // 右
            r.push(i);
            c.push(n - layer - 1);
            val.push(grid[i][n - layer - 1]);
        }
        for (let j = n - layer - 1; j > layer; --j) {   // 上
            r.push(layer);
            c.push(j);
            val.push(grid[layer][j]);
        }
        let total = val.length;   // 每一层的元素总数
        let kk = k % total;   // 等效轮转次数
        // 找到每个下标对应的轮转后的取值
        for (let i = 0; i < total; ++i) {
            let idx = (i + total - kk) % total;   // 轮转后取值对应的下标
            grid[r[i]][c[i]] = val[idx];
        }
    }
    return grid;
};
