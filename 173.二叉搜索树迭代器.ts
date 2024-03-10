/*
 * @lc app=leetcode.cn id=173 lang=typescript
 *
 * [173] 二叉搜索树迭代器
 */

import { buildTree } from "./105.从前序与中序遍历序列构造二叉树";
import { ListNode, TreeNode } from "./util/listNode";

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class BSTIterator {
    head: ListNode | null;
    constructor(root: TreeNode | null) {
       this.head =  this.tree2List(root);
    }

    next(): number {
        const value = this.head?.val;
        // @ts-ignore
        this.head = this.head?.next;
        // @ts-ignore
        return value;
    }

    hasNext(): boolean {
        return this.head? true : false
    }

    tree2List(root: TreeNode | null) {

        let result = new ListNode();
        let head = result;
        
        cre(root);
        
        
        return result.next;
        
        function cre(node: TreeNode | null) {
            if(!node) {
                return;
            }
            
            cre(node.left );
            head.next = new ListNode(node.val);
            head = head.next;
            cre(node.right);
        
        }
    }
}

// const BST = buildTree([7,3, 15, 9, 20], [3, 7, 9, 15, 20])
// const iterator = new BSTIterator(BST)


/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

