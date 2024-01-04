package Week237;

import java.util.Arrays;

public class T2 {
    public int maxIceCream(int[] costs, int coins) {
        Arrays.sort(costs);
        int ret = 0;
        int i = 0;
        while (i < costs.length && ret + costs[i] <= coins) {
            ret += costs[i++];
        }
        return i;
    }
}
