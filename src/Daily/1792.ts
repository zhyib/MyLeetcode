import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

function maxAverageRatio(classes: number[][], extraStudents: number): number {
  const pq = new MaxPriorityQueue<number[]>(element => element[0] / element[1]);

  for (const [pass, total] of classes) {
    pq.enqueue([(total - pass) / (total * (total + 1)), pass, total]);
  }

  while (extraStudents--) {
    let [ratio, pass, total] = pq.dequeue()!;
    pass++;
    total++;
    pq.enqueue([(total - pass) / (total * (total + 1)), pass, total]);
  }

  let ans = 0;
  while (!pq.isEmpty()) {
    const element = pq.dequeue()!;
    ans += element[1] / element[2];
  }
  return ans / classes.length;
};

maxAverageRatio([[97, 500], [30, 915], [400, 856], [444, 623], [781, 786], [3, 713]], 8);
