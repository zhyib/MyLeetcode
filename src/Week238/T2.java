package Week238;

import java.util.Arrays;

public class T2 {
    public int maxFrequency(int[] nums, int k) {
        Arrays.sort(nums);
        int[] arr = new int[nums.length - 1];
        for (int i = 1; i < nums.length; i++) {
            arr[i - 1] = nums[i] - nums[i - 1];
        }

        System.out.println(Arrays.toString(arr));
        int max = 0;
        for (int i = 0; i < arr.length; i++) {
            int sum = 0;
            int pre = 0;
            int times = 0;
            for (int j = i; j >= 0; j--) {
                pre += arr[j];
                sum += pre;
                times++;
                if (sum > k) {
                    max = Math.max(times - 1, max);
                }
            }
        }
        return max;
    }

}
