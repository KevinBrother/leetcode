/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
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

function postorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];

    function postorder(root: TreeNode | null ) {
        if(!root) {
            return;
        }
        postorder(root.left);
        postorder(root.right);
        result.push(root.val);
    }

    postorder(root);

    return result;
};

// @lc code=end

