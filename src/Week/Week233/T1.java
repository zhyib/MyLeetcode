package Week233;

public class T1 {
    // 1800 - 最大升序子数组和
    public int maxAscendingSum(int[] nums) {
        int sum = nums[0];
        int pre = nums[0];
        int max = -1;
        int n = nums.length;
        for (int i = 1; i < n; i++) {
            if (nums[i] > pre) {
                sum += nums[i];
            } else {
                max = Math.max(max, sum);
                sum = nums[i];
            }
            pre = nums[i];
        }
        return Math.max(max, sum);
    }
}
