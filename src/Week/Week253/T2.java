package Week253;

import java.util.PriorityQueue;

public class T2 {
    public int minStoneSum(int[] piles, int k) {
        PriorityQueue<Integer> priorityQueue = new PriorityQueue<>((a, b) -> b - a);
        for (int pile : piles) {
            priorityQueue.add(pile);
        }
        for (int i = 0; i < k; i++) {
            int t = priorityQueue.poll();
            t = t - t / 2;
            priorityQueue.add(t);
        }
        int ret = 0;
        while (!priorityQueue.isEmpty()) {
            ret += priorityQueue.poll();
        }
        return ret;
    }
}
