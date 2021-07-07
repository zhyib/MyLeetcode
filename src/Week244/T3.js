/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function(s) {

    const same = function (ch, x) {
        return (+ch) === x ? 1 : 0;
    };

    let n = s.length;
    let pre = new Array(n).fill(0).map(x => new Array(2).fill(0));
    // 注意 i = 0 的边界情况
    pre[0][0] = same(s[0], 1);
    pre[0][1] = same(s[0], 0);
    for (let i = 1; i < n; ++i) {
        pre[i][0] = pre[i - 1][1] + same(s[i], 1);
        pre[i][1] = pre[i - 1][0] + same(s[i], 0);
    }

    let ans = Math.min(pre[n - 1][0], pre[n - 1][1]);

    if (n % 2 === 1) {
        // 如果 n 是奇数，还需要求出 suf
        let suf = new Array(n).fill(0).map(x => new Array(2).fill(0));
        // 注意 i = n - 1 的边界情况
        suf[n - 1][0] = same(s[n - 1], 1);
        suf[n - 1][1] = same(s[n - 1], 0);
        for (let i = n - 2; i >= 0; --i) {
            suf[i][0] = suf[i + 1][1] + same(s[i], 1);
            suf[i][1] = suf[i + 1][0] + same(s[i], 0);
        }
        for (let i = 0; i + 1 < n; ++i) {
            // 两边向中间夹 取最小值
            ans = Math.min(ans, pre[i][0] + suf[i + 1][0]);
            ans = Math.min(ans, pre[i][1] + suf[i + 1][1]);
        }
    }

    return ans;
};
