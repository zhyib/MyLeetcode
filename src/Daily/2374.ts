var edgeScore = function(edges) {
    const score = Array(edges.length).fill(0);
    let ans = 0;
    for (let i = 0; i < edges.length; i++) {
        const to = edges[i];
        score[to] += i;
        if (score[to] > score[ans] || score[to] === score[ans] && to < ans) {
            ans = to;
        }
    }
    return ans;
};

作者：灵茶山艾府
链接：https://leetcode.cn/problems/node-with-highest-edge-score/solutions/1746842/by-endlesscheng-z1sm/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。