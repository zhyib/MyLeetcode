/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
    let users = new Map();
    for (let [id, min] of logs) {
        if (!users.has(id)) {
            users.set(id, new Set());
        }
        users.get(id).add(min);
    }

    let ret = new Array(k).fill(0);
    users.forEach((val, key) => {
        ret[val.size - 1]++;
    })
    return ret;
};