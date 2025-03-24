function timeRequiredToBuy(tickets: number[], k: number): number {
  let target = tickets[k];
  return tickets.reduce((pre, cur, i) => pre + Math.min(cur, i <= k ? target : target - 1), 0);
}
