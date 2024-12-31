import { MinPriorityQueue } from "@datastructures-js/priority-queue";

function nextGreaterElements(nums: number[]): number[] {
  const max = Math.max(...nums);
  const maxIndex = nums.indexOf(max);
  const n = nums.length;
  const queue = new MinPriorityQueue<number>();
  queue.enqueue(max);
  const ans = new Array(n).fill(-1);
  for (let i = maxIndex + n - 1; i > maxIndex; i--) {
    if (nums[i % n] < queue.front().element) {
      ans[i % n] = queue.front().element;
      queue.enqueue(nums[i % n]);
    } else {
      while (queue.size() > 0 && nums[i % n] >= queue.front().element) {
        queue.dequeue();
      }
      if (queue.size() === 0) {
        ans[i % n] = -1;
      } else {
        ans[i % n] = queue.front().element;
      }
      queue.enqueue(nums[i % n]);
    }
  }
  return ans;
}
