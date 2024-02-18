import {
  MaxPriorityQueue,
  MinPriorityQueue,
} from "@datastructures-js/priority-queue";

function numsGame(nums: number[]): number[] {
  const lower = new MaxPriorityQueue<number>();
  const upper = new MinPriorityQueue<number>();
  let sumLower = 0;
  let sumUpper = 0;
  let ans = new Array<number>();
  nums.forEach((num, index) => {
    let x = num - index;
    if (lower.isEmpty() || lower.front() >= x) {
      sumLower += x;
      lower.enqueue(x);
      if (lower.size() > upper.size() + 1) {
        let n = lower.front();
        sumLower -= n;
        sumUpper += n;
        lower.dequeue();
        upper.enqueue(n);
      }
    } else {
      sumUpper += x;
      upper.enqueue(x);
      if (upper.size() > lower.size()) {
        let n = upper.front();
        sumUpper -= n;
        sumLower += n;
        upper.dequeue();
        lower.enqueue(n);
      }
    }
    if (index % 2 === 0) {
      ans.push((sumUpper - sumLower + lower.front()) % 1000000007);
    } else {
      ans.push((sumUpper - sumLower) % 1000000007);
    }
  });
  return ans;
}
