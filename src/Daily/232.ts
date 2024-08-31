class MyQueue {
  stack: Array<number>;
  stackReverse: Array<number>;

  constructor() {
    this.stack = [];
    this.stackReverse = [];
  }

  push(x: number): void {
    this.stack.push(x);
    this.stackReverse = this.stack.reverse();
  }

  pop(): number {
    const val = this.stackReverse.pop() as number;
    this.stack = this.stackReverse.toReversed();
    return val;
  }

  peek(): number {
    return this.stackReverse[0];
  }

  empty(): boolean {
    return this.stack.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
