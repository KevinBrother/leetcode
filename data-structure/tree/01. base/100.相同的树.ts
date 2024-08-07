/*
 * @lc app=leetcode.cn id=100 lang=typescript
 *
 * [100] 相同的树
 */

import { TreeNode } from "../../../util/listNode";

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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if(p === null && q === null) {
        return true;
    }

    if(p?.val !== q?.val) {
        return false;
    }
    // @ts-ignore
    return  isSameTree(p?.left, q?.left) && isSameTree(p?.right, q?.right)
};
// @lc code=end

