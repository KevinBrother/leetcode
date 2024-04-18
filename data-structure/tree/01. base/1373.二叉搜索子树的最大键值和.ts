/*
 * @lc app=leetcode.cn id=1373 lang=typescript
 *
 * [1373] 二叉搜索子树的最大键值和
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

function maxSumBST(root: TreeNode | null): number {
    let rst = 0;

    function dfs(node): [number, number, number]{
        if(node === null) {
            return [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0];
        }

        let left = dfs(node.left);
        let right = dfs(node.right);


        let val = node.val;

        if(val <= left[1] || val >= right[0]) {
            return [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, 0];
        }


        let sum = left[2] + right[2] + val;
        rst = Math.max(sum, rst);
        return [Math.min(left[0], val), Math.max(right[1], val), sum];
    }

    dfs(root);

    return rst;
};

function maxSumBSTError(root: TreeNode | null): number {
    let rst = 0;

    function dfs(node, min, max): [boolean, number, number]{
        if(node === null) {
            return [true, 0, 0];
        }

        if(node.left === null && node.right === null) {
            rst = Math.max(node.val, rst);
            return [true, node.val, node.val];
        } 

        let [leftFlag, leftValue, leftSum] = dfs(node.left, min, node.val);
        let [rightFlag, rightValue, rightSum] = dfs(node.right,node.val, max);

        if(!leftFlag || !rightFlag ) {
            return [false, 0, 0];
        }


        if(node.val < leftValue || node.val > rightValue || leftValue < min || rightValue > max) {
            return [false, 0, 0];
        }

        console.log(leftValue, rightFlag, node.val);
        let sum = leftSum + rightSum + node.val;
        rst = Math.max(sum, rst);
        return [true ,node.val, sum];
    }

    dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

    return rst;
};
// @lc code=end

