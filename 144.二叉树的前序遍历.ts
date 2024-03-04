/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
 */

import { TreeNode } from "./util/listNode";

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


// 先把根节点放入结果数组，
function preorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = []
    preRoot(root, result);
    return result;
};


function preRoot(root: TreeNode | null, result: number[]) {
    if(!root) {
        return;
    }
    result.push(root.val);
    preRoot(root?.left, result)
    preRoot(root?.right, result)
}

// @lc code=end

