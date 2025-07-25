function matchPlayersAndTrainers(
  players: number[],
  trainers: number[]
): number {
  players.sort((a, b) => b - a);
  trainers.sort((a, b) => b - a);
  let ans = 0;
  let trainer = 0;
  for (let i = 0; i < players.length; i++) {
    if (trainer >= trainers.length) {
      break;
    }
    if (players[i] <= trainers[trainer]) {
      ans += 1;
      trainer += 1;
    }
  }
  return ans;
}
