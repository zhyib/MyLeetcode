function findPermutationDifference(s: string, t: string): number {
  let mapS: Record<string, number> = {};
  let mapT: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    mapS[s.charAt(i)] = i;
    mapT[t.charAt(i)] = i;
  }
  let ans = 0;
  Object.entries(mapS).forEach(([k, v]) => {
    ans += Math.abs(v - mapT[k]);
  });
  return ans;
}
