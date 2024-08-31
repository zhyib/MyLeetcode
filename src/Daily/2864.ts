function maximumOddBinaryNumber(s: string): string {
  let zeros: string[] = [];
  let ones: string[] = [];
  s.split("").forEach((item) => {
    if (item === "0") {
      zeros.push(item);
    } else {
      ones.push(item);
    }
  });
  return `${ones.slice(1).join("")}${zeros.join("")}1`;
}
