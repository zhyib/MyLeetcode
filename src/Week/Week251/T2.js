/**
 * @param {string} num
 * @param {number[]} change
 * @return {string}
 */
var maximumNumber = function(num, change) {
    let ret = '';
    let flag = false; // unchanged
    for (let i = 0 ; i < num.length; ++i) {
        let dig = Number(num[i]);
        if (dig < change[dig]) {
            ret += change[dig];
            flag = true; // changed
        } else if (dig === change[dig]) {
            if (flag) {
                ret += change[dig];
            } else {
                ret += dig;
            }
        } else {
            if (flag) {
                ret += num.slice(i);
                break;
            } else {
                ret += dig;
            }
        }
    }
    return ret;
};

maximumNumber("214010",    [6,7,9,7,4,0,3,4,4,7])