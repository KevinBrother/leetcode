/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

function recursive(cur: ListNode, curL1: ListNode | null, curL2: ListNode | null) {
    if(curL1 === null) {
        cur.next = curL2;
        return;
    }

    if(curL2 === null) {
        cur.next = curL1;
        return;
    }

    // 判断当前节点与两个列表节点的值大小
    if(curL1.val <= curL2.val) {
        cur.next = curL1;
        recursive(cur.next, curL1.next, curL2);
    }else {
        cur.next = curL2;
        recursive(cur.next, curL1, curL2.next);
    }

}


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    function recursive(cur: ListNode, curL1: ListNode | null, curL2: ListNode | null) {
        if(curL1 === null) {
            cur.next = curL2;
            return;
        }
    
        if(curL2 === null) {
            cur.next = curL1;
            return;
        }
    
        // 判断当前节点与两个列表节点的值大小
        if(curL1.val <= curL2.val) {
            cur.next = curL1;
            recursive(cur.next, curL1.next, curL2);
        }else {
            cur.next = curL2;
            recursive(cur.next, curL1, curL2.next);
        }
    
    }
    
    const preHead = new ListNode();
    recursive(preHead, list1, list2);
    return preHead.next;

};
// @lc code=end

