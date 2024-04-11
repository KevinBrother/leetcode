/*
 * @lc app=leetcode.cn id=1026 lang=typescript
 *
 * [1026] 节点与其祖先之间的最大差值
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

function maxAncestorDiff(root: TreeNode | null): number {
  let rst = 0;

  function dfs(node, min, max) {
    if (node === null) {
      return;
    }

    min = Math.min(min, node.val);
    max = Math.max(max, node.val);

    rst = Math.max(rst, Math.max(node.val - min, max - node.val));
    dfs(node.left, min, max);
    dfs(node.right, min, max);
  }

  dfs(root, root?.val, root?.val);

  return rst;
}
// @lc code=end
