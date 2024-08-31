class MyHashMap {
  base: number;
  arr: number[][][];

  constructor() {
    this.base = 769;
    this.arr = new Array(this.base).fill(0).map(() => new Array());
  }

  put(key: number, value: number): void {
    let index = key % this.base;
    for (let i = 0; i < this.arr[index].length; i++) {
      if (this.arr[index][i][0] === key) {
        this.arr[index][i][1] = value;
        return;
      }
    }
    this.arr[index].push([key, value]);
  }

  get(key: number): number {
    let index = key % this.base;
    for (let i = 0; i < this.arr[index].length; i++) {
      if (this.arr[index][i][0] === key) {
        return this.arr[index][i][1];
      }
    }
    return -1;
  }

  remove(key: number): void {
    let index = key % this.base;
    for (let i = 0; i < this.arr[index].length; i++) {
      if (this.arr[index][i][0] === key) {
        this.arr[index].splice(i, 1);
        break;
      }
    }
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
