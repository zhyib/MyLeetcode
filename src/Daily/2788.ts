function splitWordsBySeparator(words: string[], separator: string): string[] {
  return words
    .map((item) => item.split(separator))
    .flat()
    .filter((word) => word !== "");
}
