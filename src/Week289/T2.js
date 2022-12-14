/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    let obj = {};
    tasks.map((val) => {
        obj[val] = obj[val] ? obj[val] + 1 : 1;
    });
    let sum = 0;
    for (let val of Object.values(obj)) {
        if (val === 1) {
            return -1;
        }
        sum += Math.floor(val / 3 + (val % 3 ? 1 : 0));
    }
    return sum;
};