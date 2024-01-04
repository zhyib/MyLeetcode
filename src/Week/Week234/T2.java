package Week234;

public class T2 {
    public int reinitializePermutation(int n) {
        int[] perm = new int[n];
        for (int i = 0; i < n; i++) {
            perm[i] = i;
        }

        int count = 0;
        boolean flag = true;
        while (true) {
            count++;
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                if (i % 2 == 0) {
                    arr[i] = perm[i / 2];
                } else  {
                    arr[i] = perm[n / 2 + (i - 1) / 2];
                }
                if (arr[i] != i) {
                    flag = false;
                }
            }
            perm = arr;
            if (flag) {
                return count;
            } else {
                flag = true;
            }
        }
    }
}
