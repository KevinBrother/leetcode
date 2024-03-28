/*
 * @lc app=leetcode.cn id=106 lang=typescript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 */

import { TreeNode } from "../../util/listNode";

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

export function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    
    function createTree(inorder: number[], postorder: number[], len: number) {
        if(len === 0 ) {
            return null;
        }

        const node = new TreeNode(postorder[len-1]);
        const inorderRootIndex = inorder.findIndex(item => item === node.val);

        node.left = createTree(inorder.slice(0, inorderRootIndex), postorder.slice(0, inorderRootIndex), inorderRootIndex);
        node.right = createTree(inorder.slice(inorderRootIndex + 1), postorder.slice(inorderRootIndex, -1), len - inorderRootIndex - 1);

        return node;
    }

    return createTree(inorder, postorder, postorder.length)
};

console.log('first', buildTree([9,3,15,20,7],[9,15,7,20,3]))
// @lc code=end

