class Spreadsheet {
  map: Map<string, number>;
  constructor(rows: number) {
    this.map = new Map<string, number>();
  }

  setCell(cell: string, value: number): void {
    this.map.set(cell, value);
  }

  resetCell(cell: string): void {
    this.map.delete(cell);
  }

  getValue(formula: string): number {
    const str = formula.substring(1).split('+');
    let ans = 0;
    for (let i = 0; i < str.length; i++) {
      if (Number.isInteger(Number(str[i]))) {
        ans += Number(str[i]);
      } else {
        ans += this.map.get(str[i]) ?? 0;
      }
    }
    return ans;
  }
}

/**
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */
