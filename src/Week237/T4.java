package Week237;

public class T4 {
    public int getXORSum(int[] arr1, int[] arr2) {
        int a = 0;
        int b = 0;
        for (int i : arr1) {
            a ^= i;
        }
        for (int i : arr2) {
            b ^= i;
        }
        return a & b;
    }
}
