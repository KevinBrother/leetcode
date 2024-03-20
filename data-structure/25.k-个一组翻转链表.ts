/*
 * @lc app=leetcode.cn id=25 lang=typescript
 *
 * [25] K 个一组翻转链表
 */

import { CreateListNode } from "../util/listNode"

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

 class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

class Util {
    head: ListNode = {
        val: 0,
        next: null
    }

    addAtHead(node: ListNode) {
        node.next = this.head.next;
        this.head.next = node;
    }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let count = k; // 遍历的节点数
    let pred = head?.next; // 当前节点
    let pHead = head; // 当前轮的头节点
    let util = new Util();

    while(pred && count > 0) {
        // 遍历 count，当 count === k时，创建新的Util对象，并设置新的 pHead
        if(count === k) {
            util = new Util();
        }
        pred = pred.next
        // @ts-ignore
        // TODO 会改变原来链表的值，怎么不改变？
        util.addAtHead(pred)

        // 当 count 为 0 时，做拼接, 并把count 置为k，开始新一轮循环
        count--;

        if(count === 0) {
            // @ts-ignore
            pHead.next = util.head.next;
            pHead = pred;
            count = k;
        }
    }

    return head;
};

const listNode = new CreateListNode([1,2,3,4,5])
reverseKGroup(listNode.head, 2)
console.log('listNode.head', listNode.head)
// @lc code=end

