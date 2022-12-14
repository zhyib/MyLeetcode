/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
    let arr = sentence.split(' ');
    let reg = /^([!.,]|[a-z]+-[a-z][!.,]?|[a-z]+[!.,]?)$/;
    let ret = 0;
    for (let s of arr) {
        if (s.match(reg)) {
            ret++;
        }
    }
    return ret;
};

countValidWords("he bought 2 pencils, 3 erasers, and 1  pencil-sharpener.")