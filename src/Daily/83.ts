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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(-101);
  let prev = dummy;
  let curr = head;
  while (curr !== null) {
    if (curr.val !== prev.val) {
      prev.next = curr;
      prev = prev.next;
    }
    curr = curr.next;
  }
  prev.next = null;
  return dummy.next;
}
