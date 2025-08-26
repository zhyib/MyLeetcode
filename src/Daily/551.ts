function checkRecord(s: string): boolean {
  if (s.includes("A") && s.match(/A/g)!.length > 2) {
    return false;
  }
  if (s.includes("LLL")) {
    return false;
  }
  return true;
}
