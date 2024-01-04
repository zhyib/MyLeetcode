package Week256;

import java.util.ArrayList;
import java.util.Arrays;

public class T3 {
    public int minSessions(int[] tasks, int sessionTime) {
        boolean[] flags = new boolean[tasks.length];
        Integer[] arr = new Integer[tasks.length];
        for (int i = 0; i < tasks.length; i++) {
            arr[i] = tasks[i];
        }
        Arrays.sort(arr, (Integer a, Integer b) -> b - a);
        ArrayList<Integer> arrayList = new ArrayList<>(0);
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arrayList.size(); j++) {
                int left = arrayList.get(j);
                if (left >= arr[i]) {
                    left -= arr[i];
                    arrayList.set(j, left);
                    flags[i] = true;
                    break;
                }
            }
            if (!flags[i]) {
                arrayList.add(sessionTime - arr[i]);
            }
        }
        return arrayList.size();
    }
}
