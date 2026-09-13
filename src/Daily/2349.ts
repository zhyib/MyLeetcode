import { MinPriorityQueue } from '@datastructures-js/priority-queue';

class NumberContainers {
  map = new Map<number, number>();
  heaps = new Map<number, MinPriorityQueue<number>>();
  constructor() {
    this.map = new Map<number, number>();
    this.heaps = new Map<number, MinPriorityQueue<number>>();
  }

  change(index: number, number: number): void {
    this.map.set(index, number);
    if (!this.heaps.has(number)) {
      this.heaps.set(number, new MinPriorityQueue<number>());
    }
    this.heaps.get(number)!.enqueue(index);
  }

  find(number: number): number {
    if (!this.heaps.has(number)) {
      return -1;
    }

    const heap = this.heaps.get(number)!;
    while (!heap.isEmpty() && number !== this.map.get(heap.front()!)) {
      heap.dequeue();
    }
    return heap.isEmpty() ? -1 : heap.front()!;
  }
}

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */
