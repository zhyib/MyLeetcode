/**
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function (word) {
    let map = new Map();
    map.set(0, 1);

    let mask = 0;
    let ans = 0;
    for (let ch of word) {
        let idx = ch.charCodeAt(0) - 97;
        mask ^= 1 << idx;
        if (map.has(mask)) {
            ans += map.get(mask);       // if has the same parity
        }
        for (let i = 0; i < 10; i++) {
            let maskPre = mask ^ 1 << i;    // different parity
            if (map.has(maskPre)) {
                ans += map.get(maskPre);
            }
        }
        let num = map.get(mask);
        map.set(mask, num ? num + 1 : 1);
    }
    return ans;
}
// var wonderfulSubstrings = function (word) {
//     let ret = 0;
//     for (let i = 0; i < word.length; i++) {
//         let map = {};
//         let odd = 0;
//         for (let j = i; j < word.length; j++) {
//             if (map[word[j]]) {
//                 let c = map[word[j]] + 1;
//                 map[word[j]] = c;
//                 if (c % 2 === 1) {
//                     odd++;
//                 } else {
//                     odd--;
//                 }
//             } else {
//                 map[word[j]] = 1;
//                 odd++;
//             }
//             if (odd < 2) {
//                 ret++;
//             }
//         }
//     }
//     return ret;
// };