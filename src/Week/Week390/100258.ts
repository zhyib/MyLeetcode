import {
  MaxPriorityQueue,
  PriorityQueueItem,
} from "@datastructures-js/priority-queue";

function mostFrequentIDs(nums: number[], freq: number[]): number[] {
  const queue = new MaxPriorityQueue<number>();
  const realFreq: Record<number, number> = {};
  const ans: Array<number> = [];
  for (let i = 0; i < freq.length; i++) {
    const num = nums[i];
    if (realFreq[num] === undefined) {
      realFreq[num] = freq[i];
    } else {
      realFreq[num] += freq[i];
    }

    queue.enqueue(nums[i], realFreq[num]);
    while (realFreq[queue.front().element] !== queue.front().priority) {
      queue.dequeue();
    }
    ans.push(queue.front().priority);
  }
  return ans;
}

mostFrequentIDs([2, 3, 2, 1], [3, 2, -3, 1]);
