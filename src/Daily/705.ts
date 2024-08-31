class MyHashSet {
  base: number;
  arr: number[][];

  constructor() {
    this.base = 97;
    this.arr = new Array(this.base).fill(0).map(() => new Array());
  }

  add(key: number): void {
    let index = key % this.base;
    if (!this.arr[index].includes(key)) {
      this.arr[index].push(key);
    }
  }

  remove(key: number): void {
    let index = key % this.base;
    if (this.arr[index].indexOf(key) !== -1) {
      this.arr[index].splice(this.arr[index].indexOf(key), 1);
    }
  }

  contains(key: number): boolean {
    let index = key % this.base;
    return this.arr[index].indexOf(key) !== -1;
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
