/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
 */

import { ListNode } from "../../util/listNode";

// @lc code=start
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

function recursive(cur: ListNode | null, pre: ListNode | null) {
  if (cur === null) {
    return pre;
  }
  let rst = recursive(cur.next, cur);
  rst.next = pre;
  return rst;
}

function reverseList(head: ListNode | null): ListNode | null {
  function recursive(cur: ListNode | null, pre: ListNode | null) {
    if (cur === null) {
      return pre;
    }

    let rst = recursive(cur.next, cur);
    cur.next = pre;
    return rst;
  }
  return recursive(head, null);
}
// @lc code=end
