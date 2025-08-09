class FindSumPairs {
  map1: Map<number, number>;
  map2: Map<number, number>;
  nums1: number[];
  nums2: number[];

  constructor(nums1: number[], nums2: number[]) {
    this.nums1 = nums1;
    this.nums2 = nums2;
    this.map1 = new Map();
    this.map2 = new Map();
    nums1.forEach((item) => {
      let count = this.map1.get(item);
      if (count) {
        this.map1.set(item, count + 1);
      } else {
        this.map1.set(item, 1);
      }
    });
    nums2.forEach((item) => {
      let count = this.map2.get(item);
      if (count) {
        this.map2.set(item, count + 1);
      } else {
        this.map2.set(item, 1);
      }
    });
  }

  add(index: number, val: number): void {
    const before = this.nums2[index];
    this.nums2[index] += val;
    this.map2.set(before, this.map2.get(before) - 1);
    const after = this.nums2[index];
    const count = this.map2.get(after);
    if (count) {
      this.map2.set(after, count + 1);
    } else {
      this.map2.set(after, 1);
    }
  }

  count(tot: number): number {
    let count = 0;
    for (let i = 0; i < this.nums1.length; i++) {
      const temp = tot - this.nums1[i];
      if (this.map2.has(temp)) {
        count += this.map2.get(temp);
      }
    }
    return count;
  }
}

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */
