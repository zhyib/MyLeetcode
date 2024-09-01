function calPoints(operations: string[]): number {
  const arr: number[] = [];
  operations.forEach((item) => {
    switch (item) {
      case "+":
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        break;
      case "D":
        arr.push(arr[arr.length - 1] * 2);
        break;
      case "C":
        arr.pop();
        break;
      default:
        arr.push(Number(item));
    }
  });
  return arr.reduce((a, b) => a + b, 0);
}
