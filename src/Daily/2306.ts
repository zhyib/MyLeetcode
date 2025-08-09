function distinctNames(ideas: string[]): number {
  const names = new Map<string, Set<string>>();
  for (const idea of ideas) {
    if (!names.has(idea[0])) {
      names.set(idea[0], new Set());
    }
    names.get(idea[0])!.add(idea.slice(1));
  }

  const getIntersectSize = (a: Set<string>, b: Set<string>): number => {
    let count = 0;
    for (const s of a) {
      if (b.has(s)) count++;
    }
    return count;
  };

  let ans = 0;
  for (const [preA, setA] of names) {
    for (const [preB, setB] of names) {
      if (preA === preB) continue;
      const intersect = getIntersectSize(setA, setB);
      ans += (setA.size - intersect) * (setB.size - intersect);
    }
  }
  return ans;
}
