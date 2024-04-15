/*
 * @lc app=leetcode.cn id=938 lang=typescript
 *
 * [938] 二叉搜索树的范围和
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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {

  if (root === null) {
    return 0;
  }

  let preSum = rangeSumBST(root.left, low, high);

  if(root.val > high) {
    return preSum;
  }

  if(root.val >= low) {
    preSum += root.val;
  }

  return rangeSumBST(root.right, low, high) + preSum;
}
// @lc code=end
