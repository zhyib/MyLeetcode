/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
    let arr = new Array(dist.length);
    for (let i = 0; i < dist.length; i++) {
        arr[i] = Math.ceil(dist[i] / speed[i]);
    }
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < i + 1) {
            return i;
        }
    }
    return arr.length;
};