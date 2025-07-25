function makeFancyString(s: string): string {
  const arr: Array<string> = [];
  Array.from(s).forEach((c, index) => {
    if (index >= 2) {
      if (c === arr[arr.length - 1] && c === arr[arr.length - 2]) {
        return;
      }
    }
    arr.push(c);
  });
  return arr.join("");
}
