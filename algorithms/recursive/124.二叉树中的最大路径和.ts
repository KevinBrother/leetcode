/*
 * @lc app=leetcode.cn id=124 lang=typescript
 *
 * [124] 二叉树中的最大路径和
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

// 计算当前节点 与 左右两字节点比较多最大值，作为返回
function recursive(node: TreeNode | null): number {
    if(node === null) {
        return 0;
    }
    let max = 0;
    let left = recursive(node.left) + node.val;
    let right = recursive(node.right);
    max = Math.max(right, node.val);
    return max;
}

function maxPathSum(root: TreeNode | null): number {
    let result = root?.val || 0;
    function recursive(node: TreeNode | null) {
        if(node === null) {
            return 0;
        }
        
        let val = node.val
        let left = recursive(node.left) + val;

        
        let right = recursive(node.right) + val;
        let sum = left + right - val;
        let max = Math.max(val, left, right, sum);
        result = Math.max(result, max);
        return max;
    }

    recursive(root);

    return result;
};
// @lc code=end

