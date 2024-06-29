"use strict";
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
exports.__esModule = true;
var ListNode_1 = require("../ListNode");
function deleteDuplicates(head) {
    var dummy = new ListNode_1["default"](-101);
    var prev = dummy;
    var curr = head;
    while (curr !== null) {
        if (curr.next === null || curr.next.val !== curr.val) {
            prev.next = curr;
            prev = prev.next;
            curr = prev.next;
        }
        else {
            while (curr.next !== null && curr.next.val === curr.val) {
                curr = curr.next;
            }
            curr = curr.next;
        }
    }
    prev.next = null;
    return dummy.next;
}
