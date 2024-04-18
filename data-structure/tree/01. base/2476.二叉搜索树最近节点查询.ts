/*
 * @lc app=leetcode.cn id=2476 lang=typescript
 *
 * [2476] 二叉搜索树最近节点查询
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
// TODO 二分查找
function closestNodes(root: TreeNode | null, queries: number[]): number[][] {
  let sorted: number[] = [];
  dfs(root);

  function dfs(node) {
    if (node === null) {
      return;
    }

    dfs(node.left);
    sorted.push(node.val);
    dfs(node.right);
  }

  // 先认为 queries 为顺序的
  let rst = new Array(queries.length).fill([-1, -1]);

  return rst;
}
// @lc code=end
