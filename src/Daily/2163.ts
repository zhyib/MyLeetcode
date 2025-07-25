import {
  MaxPriorityQueue,
  MinPriorityQueue,
} from "@datastructures-js/priority-queue";

function minimumDifference(nums: number[]): number {
  const n = nums.length / 3;
  const minHeap = new MinPriorityQueue<number>();
  const maxHeap = new MaxPriorityQueue<number>();
  const minArr = new Array(3 * n).fill(0);
  const maxArr = new Array(3 * n).fill(0);

  let sum = 0;
  for (let i = 0; i < n; i++) {
    // 0 ~ n-1
    maxHeap.enqueue(nums[i]);
    sum += nums[i];
  }
  minArr[n - 1] = sum;
  for (let i = n; i <= 2 * n; i++) {
    // n ~ 2n-1
    if (maxHeap.front()!.element > nums[i]) {
      const temp = maxHeap.dequeue()!.element;
      sum = sum - temp + nums[i];
      maxHeap.enqueue(nums[i]);
    }
    minArr[i] = sum;
  }

  sum = 0;
  for (let i = 3 * n - 1; i >= 2 * n; i--) {
    // 3n-1 ~ 2n
    minHeap.enqueue(nums[i]);
    sum += nums[i];
  }
  maxArr[2 * n] = sum;
  for (let i = 2 * n - 1; i >= n - 1; i--) {
    // 2n-1 ~ n
    if (minHeap.front()!.element < nums[i]) {
      const temp = minHeap.dequeue()!.element;
      sum = sum - temp + nums[i];
      minHeap.enqueue(nums[i]);
    }
    maxArr[i] = sum;
  }

  let ans = Number.MAX_SAFE_INTEGER;
  for (let i = n - 1; i < 2 * n; i++) {
    ans = Math.min(ans, minArr[i] - maxArr[i + 1]);
  }
  return ans;
}

minimumDifference([3, 1, 2]);
