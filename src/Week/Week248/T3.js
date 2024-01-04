/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function (n) {
    let m = Math.pow(10, 9) + 7;

    function myPow(x, y) {
        let ans = 1;
        while (y !== 0) {
            if (y & 1 !== 0) {//如果最末尾的数是1,储存有效值
                ans *= x;
                ans %= m;
            }
            x = (x * x) % m; //这里即完成了x^(2^(n-1)*i)的计算
            y >>= 1; //右位移去掉末尾1位,也可以看成是除以2取整数
        }
        return ans;
    }

    let a = n >> 1;
    let b = (n >> 1) + (n % 2);
    return (myPow(5, b) * myPow(4, a)) % m;
};