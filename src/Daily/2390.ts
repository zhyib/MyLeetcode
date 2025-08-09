function removeStars(s: string): string {
  const arr: Array<string> = [];
  Array.from(s).forEach((c) => {
    if (c === "*") {
      arr.pop();
    } else {
      arr.push(c);
    }
  });
  return arr.join("");
}
