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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(-101);
  let prev = dummy;
  let curr = head;
  while (curr !== null) {
    if (curr.next === null || curr.next.val !== curr.val) {
      prev.next = curr;
      prev = prev.next;
      curr = prev.next;
    } else {
      while (curr.next !== null && curr.next.val === curr.val) {
        curr = curr.next;
      }
      curr = curr.next;
    }
  }
  prev.next = null;
  return dummy.next;
}
