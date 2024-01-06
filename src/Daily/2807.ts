/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import ListNode from "../ListNode";

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  const map: Record<string, number> = {};
  function gcd(a: number, b: number): number {
    if (map[`${a}-${b}`] !== undefined) {
      return map[`${a}-${b}`];
    }

    if (b === 0) {
      map[`${a}-${b}`] = a;
      return a;
    } else {
      const result = gcd(b, a % b);
      map[`${a}-${b}`] = result;
      return result;
    }
  }

  if (head === null) {
    return null;
  }
  let prev = head;
  let next = head.next;
  while (next !== null) {
    const node = new ListNode(
      gcd(Math.max(prev.val, next.val), Math.min(prev.val, next.val))
    );
    prev.next = node;
    node.next = next;
    prev = next;
    next = next.next;
  }
  return head;
}
