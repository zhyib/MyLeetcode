import { MinPriorityQueue } from "@datastructures-js/priority-queue";
function clearStars(s: string): string {
  const indices = new Array<number>();
  const queue = new MinPriorityQueue<number>();
  const map = new Array(26).fill(0).map(() => new Array<number>());
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) !== "*") {
      map[s.charCodeAt(i) - 97].push(i);
      if (map[s.charCodeAt(i) - 97].length === 1) {
        queue.enqueue(s.charCodeAt(i) - 97);
      }
    } else {
      const min = queue.front()!.element;
      indices.push(map[min].pop()!);
      if (map[min].length === 0) {
        queue.dequeue();
      }
    }
  }

  indices.sort((a, b) => a - b);
  let ans = "";
  let index = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "*") {
      continue;
    }
    if (indices[index] === i) {
      index += 1;
    } else {
      ans += s.charAt(i);
    }
  }
  return ans;
}

// clearStars(
// );

clearStars("ee**");
