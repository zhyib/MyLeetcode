import { MinPriorityQueue } from "@datastructures-js/priority-queue";

class SeatManager {
  seats: MinPriorityQueue<number>;
  constructor(n: number) {
    this.seats = new MinPriorityQueue<number>();
    for (let i = n; i >= 1; i--) {
      this.seats.enqueue(i);
    }
  }

  reserve(): number {
    return this.seats.dequeue().element;
  }

  unreserve(seatNumber: number): void {
    this.seats.enqueue(seatNumber);
  }
}

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */
