package Week248;

public class T3 {
    public static long m = (long)Math.pow(10, 9) + 7;

    public long myPow(long x, long y) {
        long ans = 1;
        while (y != 0) {
            if (y % 2 == 1) {//如果最末尾的数是1,储存有效值
                ans *= x;
                ans %= m;
            }
            x = (x * x) % m; //这里即完成了x^(2^(n-1)*i)的计算
            y >>= 1; //右位移去掉末尾1位,也可以看成是除以2取整数
        }
        return ans;
    }

    public int countGoodNumbers(long n) {
        long a = n >> 1;
        long b = (n >> 1) + (n % 2);
        return (int)((myPow(5, b) * myPow(4, a)) % m);
    }
}
