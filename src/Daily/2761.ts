class FrequencyTracker {
  private map: Record<number, number>;
  private freq: Record<number, number>;
  constructor() {
    this.map = {};
    this.freq = { 0: 0 };
  }

  addFreq(number: number): void {
    if (this.freq[number] === undefined) {
      this.freq[number] = 0;
    }
    if (number > 1) {
      this.freq[number] += 1;
      this.freq[number - 1] -= 1;
    } else {
      this.freq[1] += 1;
    }
  }

  deleteFreq(number: number): void {
    this.freq[number + 1] -= 1;
    this.freq[number] += 1;
  }

  add(number: number): void {
    if (this.map[number]) {
      this.map[number] += 1;
    } else {
      this.map[number] = 1;
    }
    this.addFreq(this.map[number]);
  }

  deleteOne(number: number): void {
    if (this.map[number]) {
      this.map[number] -= 1;
      this.deleteFreq(this.map[number]);
    }
  }

  hasFrequency(frequency: number): boolean {
    return this.freq[frequency] > 0;
  }
}

/**
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */
