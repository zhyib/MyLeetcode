/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
var longestObstacleCourseAtEachPosition = function(obstacles) {
    let arr = new Array(0);
    const insertArr = function (t) {
        for (let i = 0; i < arr.length; i++) {
            // [0] ob 大小
            // [1] 连续长度
            if (t >= arr[i][0]) {
                let newLen = arr[i][1] + 1;
                for (let j = 0; j < arr.length; j++) {
                    if (newLen >= arr[j][1]) {
                        arr.splice(j, 0, [t, newLen]);
                        return newLen;
                    }
                }
            }
        }
        arr.push([t, 1]);
        return 1;
    }
    let ret = new Array(obstacles.length).fill(0);
    for (let i = 0; i < obstacles.length; i++) {
        ret[i] = insertArr(obstacles[i]);
    }
    return ret;
};

longestObstacleCourseAtEachPosition([5,1,5,5,1,3,4,5,1,4])