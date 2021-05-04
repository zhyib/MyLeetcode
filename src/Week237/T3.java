package Week237;

import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;

public class T3 {
    public int[] getOrder(int[][] tasks) {
        int n = tasks.length;
        PriorityQueue<Task> queue = new PriorityQueue<>(Comparator.<Task>comparingInt(x -> x.ptime).thenComparingInt(x -> x.id));
        Task[] newTasks = new Task[n];
        for (int i = 0; i < n; i++) {
            newTasks[i] = new Task();
            newTasks[i].etime = tasks[i][0];
            newTasks[i].ptime = tasks[i][1];
            newTasks[i].id = i;
        }
        Arrays.sort(newTasks, Comparator.comparingInt(x -> x.etime));

        int[] res = new int[n];
        int indRes = 0;
        int ind = 0;
        int time = 0;
        int cpu = 1;
        while (!queue.isEmpty() || ind < n) {
            time++;
            while (ind < n && newTasks[ind].etime <= time) {
                queue.add(newTasks[ind++]);
            }
            if (cpu == time) {
                if (!queue.isEmpty()) {
                    Task temp = queue.poll();
                    cpu += temp.ptime;
                    res[indRes++] = temp.id;
                }
            }
            time = cpu - 1;
        }
        return res;
    }

    class Task {
        int etime;
        int ptime;
        int id;
    }
}
