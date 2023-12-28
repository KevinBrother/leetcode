/*
 * @lc app=leetcode.cn id=876 lang=typescript
 *
 * [876] 链表的中间结点
 */

import { CreateListNode, ListNode } from "./util/listNode";

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

function getLen(head) {
    let len = 0;
    let pred = head.next
    while(pred){
        len++;
        pred = pred.next;
    }
    return len;

}
function middleNode(head: ListNode | null): ListNode | null {
    const len = getLen(head);

    let index = Math.floor(len / 2) + 1;
    let result = head;
    while(index > 0) {
        // @ts-ignore
        result = result?.next
        index--;
    }

    return result!;
};

const MyListNode2 = new CreateListNode([1,2,3,4,5])
console.log('first', middleNode(MyListNode2.head));
// @lc code=end

