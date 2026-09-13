import { MinPriorityQueue } from "@datastructures-js/priority-queue";

function minCostToEqualizeArray(
  nums: number[],
  cost1: number,
  cost2: number
): number {
  let use2 = true;
  if (cost1 * 2 <= cost2) {
    use2 = false;
  }

  const max = Math.max(...nums);
  const queue = new MinPriorityQueue<number>();
  for (const num of nums) {
    queue.enqueue(num);
  }
  let ans = 0;
  if (use2) {
    while (true) {
      if (queue.size() === 1 || queue.size() === 2) {
        ans += queue.dequeue().element * cost1;
        return ans % 1000000007;
      } else {
        let min1 = queue.dequeue().element;
        let min2 = queue.dequeue().element;
        if (min2 === max) {
          ans += (max - min1) * cost1;
          return ans % 1000000007;
        } else {
          const diff = max - min2;
          ans += diff * cost2;
          queue.enqueue(min1 + diff);
          queue.enqueue(min2 + diff);
        }
      }
    }
  } else {
    const sum = nums.reduce((pre, cur) => pre + max - cur, 0);
    ans += sum * cost1;
    return ans % 1000000007;
  }
}
