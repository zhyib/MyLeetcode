/**
 * @param {number[]} nums
 * @return {number}
 */
var countDifferentSubsequenceGCDs = function(nums) {
    function getGcd(a ,b) {
        let max = a > b ? a : b;
        let min = a > b ? b : a;
        let r = max % min;
        if(r === 0) {
            return min;
        }else {
            return getGcd(min ,r);
        }
    }

    const gcd = new Map();
    let result = new Set(nums);
    let hasNew = true;

    while (hasNew) {
        let num = Array.from(result)
        hasNew = false;
        result = new Set();
        let n = num.length;
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                let hashVal = [num[i], num[j]];
                if (!gcd.has(hashVal)) {
                    hasNew = true;
                    gcd.set(hashVal, getGcd(num[i], num[j]));
                }
                result.add(gcd.get(hashVal));
            }
        }
    }

    const ret = new Set();
    gcd.forEach((val, key) => {
        ret.add(val);
    })
    nums.forEach((val) => {
        ret.add(val);
    })
    return ret.size;
};

