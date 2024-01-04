/**
 * @param {string} startTime
 * @param {string} finishTime
 * @return {number}
 */
var numberOfRounds = function(startTime, finishTime) {
    function convert(time, type) {
        let h = Number(time.substring(0, 2));
        let m = Number(time.substring(3, 5));
        if (m % 15 !== 0) {
            let mod = m % 15;
            if (type === 's') {
                m += (15 - mod);
            } else {
                m -= mod;
            }
        }
        return [Number(time.substring(0, 2)), Number(time.substring(3, 5)), h * 60 + m];
    }

    let st = convert(startTime, 's');
    let ft = convert(finishTime, 'f');

    if (st[0] * 60 + st[1] < ft[0] * 60 + ft[1] && st[2] > ft[2]) {
        return 0;
    }
    if (st[2] > ft[2]) {
        ft[2] += 24 * 60;
    }

    return (ft[2] - st[2]) / 15;
};