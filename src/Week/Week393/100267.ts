import { MinPriorityQueue } from "@datastructures-js/priority-queue";

function findKthSmallest(coins: number[], k: number): number {
  const map: Record<number, boolean> = {};
  const queue = new MinPriorityQueue<[number, number]>();

  coins.forEach((coin) => {
    map[coin] = true;
    queue.enqueue([coin, coin], coin);
  });
  let last = 0;
  while (k > 0) {
    let coin = queue.dequeue().element;
    let next = coin[0] + coin[1];
    while (map[next]) {
      next += coin[1];
    }
    queue.enqueue([next, coin[1]], next);
    map[next] = true;
    k -= 1;
    last = coin[0];
  }
  return last;
}
