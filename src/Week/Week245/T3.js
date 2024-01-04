/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
    let ret = [0, 0, 0];
    for (let triplet of triplets) {
        if (target[0] >= triplet[0] && target[1] >= triplet[1] && target[2] >= triplet[2]) {
            ret[0] = Math.max(triplet[0], ret[0]);
            ret[1] = Math.max(triplet[1], ret[1]);
            ret[2] = Math.max(triplet[2], ret[2]);
        }
        if (ret[0] === target[0] && ret[1] === target[1] && ret[2] === target[2]) {
            return true;
        }
    }
    return false;
};