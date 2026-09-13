import { PriorityQueue } from '@datastructures-js/priority-queue';

class TaskManager {
  map: Map<number, number[]>;
  pq: PriorityQueue<number[]>;
  constructor(tasks: number[][]) {
    // taskId -> [userId, priority]
    this.map = new Map();

    // 最大堆 [userId, taskId, priority]
    this.pq = new PriorityQueue((a, b) => a[2] !== b[2] ? b[2] - a[2] : b[1] - a[1]);

    for (const [userId, taskId, priority] of tasks) {
      this.add(userId, taskId, priority);
    }
  }

  add(userId: number, taskId: number, priority: number): void {
    this.map.set(taskId, [userId, priority]);
    this.pq.enqueue([userId, taskId, priority]);
  }

  edit(taskId: number, newPriority: number): void {
    // 懒修改
    const userId = this.map.get(taskId)![0];
    this.add(userId, taskId, newPriority);
  }

  rmv(taskId: number): void {
    // 懒删除
    this.map.get(taskId)![0] = -1;
  }

  execTop(): number {
    while (!this.pq.isEmpty()) {
      const [userId, taskId, priority] = this.pq.dequeue()!;
      const [u, p] = this.map.get(taskId)!;
      if (p === priority && u === userId) {
        this.rmv(taskId);
        return userId;
      }
    }
    return -1;
  }
}
