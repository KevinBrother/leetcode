/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
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

function recursive(node: ListNode | null, prevNode: ListNode) {
  if (node === null || node.next === null) {
    return;
  }

  // 处理逻辑

  recursive(node, prevNode);
}

function swapPairs(head: ListNode | null): ListNode | null {
  let root = new ListNode();
  root.next = head;
  function recursive(node: ListNode | null, prevNode: ListNode) {
    if (node === null || node.next === null) {
      return;
    }

    // 处理逻辑
    const next = node.next;
    node.next = next.next;
    next.next = node;
    prevNode.next = next;

    recursive(node.next, node);
  }

  recursive(head, root);

  return root.next;
}
// @lc code=end
