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

function removeNodes(head: ListNode | null): ListNode | null {
  const stack: ListNode[] = [];
  let curr = head;
  while (curr) {
    while (stack.length > 0 && stack[stack.length - 1].val < curr.val) {
      stack.pop();
    }
    if (stack.length === 0) {
      head = curr;
    } else {
      stack[stack.length - 1].next = curr;
    }
    stack.push(curr);
    curr = curr.next;
  }
  return head;
}
