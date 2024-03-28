function firstDayBeenInAllRooms(nextVisit: number[]): number {
  const MOD = 1e9 + 7;
  const n = nextVisit.length;
  const s = Array(n);
  s[0] = 0;
  for (let i = 0; i < n - 1; i++) {
    const j = nextVisit[i];
    s[i + 1] = (s[i] * 2 - s[j] + 2 + MOD) % MOD;
  }
  return s[n - 1];
}
