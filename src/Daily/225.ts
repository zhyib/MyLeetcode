class MyStack {
  queue: Array<number>;
  queueReverse: Array<number>;

  constructor() {
    this.queue = new Array<number>();
    this.queueReverse = new Array<number>();
  }

  push(x: number): void {
    this.queue.push(x);
    this.queueReverse = this.queue.reverse();
  }

  pop(): number {
    const val = this.queueReverse.shift() as number;
    this.queue = this.queueReverse.reverse();
    return val;
  }

  top(): number {
    return this.queueReverse[0];
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
