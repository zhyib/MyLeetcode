package Week236;

import java.util.ArrayList;
import java.util.PriorityQueue;

public class T4 {
    private static PriorityQueue<Integer> max;
    private static PriorityQueue<Integer> min;
    private static int sum;
    private static int m;
    private static int k;

    public MKAverage(int _m, int _k) {
        max = new PriorityQueue<>(_k, (a, b) -> a - b);
        min = new PriorityQueue<>(_k, (a, b) -> b - a);
        arrayList = new ArrayList<>();
        m = _m;
        k = _k;
    }

    public void addElement(int num) {
        max.add(num);
        min.add(num);
        arrayList.add(num);
    }

    public int calculateMKAverage() {
        if (arrayList.size() < m) {
            return -1;
        }

    }
}
