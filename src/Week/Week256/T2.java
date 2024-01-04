package Week256;

import java.util.Arrays;

public class T2 {
    public String kthLargestNumber(String[] nums, int k) {
        Arrays.sort(nums, (a, b) -> {
            if (a.equals(b)) {
                return 0;
            }
            if (b.length() > a.length()) {
                return 1;
            } else if (b.length() < a.length()) {
                return -1;
            } else {
                for (int i = 0; i < b.length(); i++) {
                    if ((int)b.charAt(i) > (int)a.charAt(i)) {
                        return 1;
                    } else if ((int)b.charAt(i) < (int)a.charAt(i)) {
                        return -1;
                    }
                }
                return 0;
            }
        });
        return nums[k - 1];
    }
}
