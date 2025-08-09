function minimizedStringLength(s: string): number {
  const set = new Set<string>();
  s.split("").forEach((item) => {
    set.add(item);
  });
  return set.size;
}
