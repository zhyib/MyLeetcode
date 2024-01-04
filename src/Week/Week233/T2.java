package Week233;

import java.util.PriorityQueue;

public class T2 {
    // 1801 - 积压订单中的订单总数
    public int getNumberOfBacklogOrders(int[][] orders) {
        PriorityQueue<Long[]> buy = new PriorityQueue<>((a, b) -> (int) (b[0] - a[0]));
        PriorityQueue<Long[]> sell = new PriorityQueue<>((a, b) -> (int) (a[0] - b[0]));
        for (int[] order : orders) {
            if (order[2] == 1) {
                sell.add(new Long[]{(long) order[0], (long) order[1]});
            } else {
                buy.add(new Long[]{(long) order[0], (long)order[1]});
            }
            while (!sell.isEmpty() && !buy.isEmpty()) {
                Long[] s = sell.poll();
                Long[] b = buy.poll();
                if (b[0] >= s[0]) {
                    long min = Math.min(b[1], s[1]);
                    b[1] -= min;
                    s[1] -= min;
                    if (b[1] == 0) {
                        sell.add(s);
                    } else {
                        buy.add(b);
                    }
                } else {
                    sell.add(s);
                    buy.add(b);
                    break;
                }
            }
        }

        int ret = 0;
        while (!buy.isEmpty()) {
            ret += buy.poll()[1] % 1000000007;
            ret %= 1000000007;
        }
        while (!sell.isEmpty()) {
            ret += sell.poll()[1] % 1000000007;
            ret %= 1000000007;
        }
        return ret % 1000000007;
    }
}
