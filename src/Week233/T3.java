package Week233;

public class T3 {
    // 1802 - 有界数组中指定下标处的最大值
    public int maxValue(int n, int index, int maxSum) {
        long sum = n;
        int count = 1;
        int p = index;
        int q = index;
        while (sum + (q - p + 1) <= (long) maxSum) {
            count++;
            sum += (q - p + 1);
            if (p > 0) {
                p--;
            }
            if (q < n - 1) {
                q++;
            }
            if (p == 0 && q == n - 1) {
                break;
            }
        }
        return count + (int)((maxSum - sum) / n);
    }
}
