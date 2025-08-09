function isBalanced(num: string): boolean {
  return (
    num
      .split("")
      .reduce(
        (pre, cur, index) =>
          index % 2 === 0 ? Number(pre) + Number(cur) : Number(pre) - Number(cur),
        0
      ) === 0
  );
}
