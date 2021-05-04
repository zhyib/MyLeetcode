package Week235;

public class T5 {
    public int removeDuplicates(int[] nums) {
        int slow = 0;
        int fast = 0;
        int n = nums.length;
        int count = 0;
        int last = -984191;
        while (fast < n) {
            if (nums[fast] == last) {
                if (count < 2) {
                    count++;
                    nums[slow] = nums[fast];
                    slow++;
                }
            } else {
                last = nums[fast];
                count = 0;
                nums[slow] = nums[fast];
                slow++;
            }
            fast++;
        }
        return slow - 1;
    }
}
