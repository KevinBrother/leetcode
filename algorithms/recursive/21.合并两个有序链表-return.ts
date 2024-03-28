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

function recursive(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if(list1 === null) {
        return list2;
    }

    if(list2 === null) {
        return list1;
    }

    // 判断当前节点与两个列表节点的值大小
    if(list1.val <= list2.val) {
        list1.next = recursive(list1.next, list2);
        return list1;
    }else {
        list2.next =  recursive(list1, list2.next);
        return list2
    }
}


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    
    function recursive(list1: ListNode | null, list2: ListNode | null): ListNode | null {
        if(list1 === null) {
            return list2;
        }
    
        if(list2 === null) {
            return list1;
        }
    
        // 判断当前节点与两个列表节点的值大小
        if(list1.val <= list2.val) {
            list1.next = recursive(list1.next, list2);
            return list1;
        }else {
            list2.next =  recursive(list1, list2.next);
            return list2
        }
    }

    return recursive(list1, list2)

};
// @lc code=end

