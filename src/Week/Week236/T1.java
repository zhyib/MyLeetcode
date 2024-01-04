package Week236;

public class T1 {
    public int arraySign(int[] nums) {
        int ret = 1;
        for (int num : nums) {
            if (num < 0) {
                ret *= -1;
            }
            if (num == 0) {
                return 0;
            }
        }
        return ret;
    }
}
