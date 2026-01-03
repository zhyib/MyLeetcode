function reorderedPowerOf2(n: number): boolean {
  const set = new Set<string>();
  for (let i = 1; i < 1000000000; i *= 2) {
    set.add(i.toString().split("").sort().join(""));
  }

  return set.has(n.toString().split("").sort().join(""));
}

reorderedPowerOf2(10);
