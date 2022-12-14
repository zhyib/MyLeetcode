/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let left = 0;
    let right = s.length - 1;
    let countL = 0;
    let countR = 0;
    let ret = 0;
    while (left < right) {
        if (s[left] === '[') {
            countL++;
        } else {
            countL--;
        }
        left++;
        if (countL === -1) {
            while (countR !== -1) {
                if (s[right] === ']') {
                    countR++;
                } else {
                    countR--;
                }
                right--;
            }
            countL = 1;
            countR = 1;
            ret++;
        }
    }
    return ret;
};

minSwaps("][][][")