/*
 * @lc app=leetcode.cn id=103 lang=typescript
 *
 * [103] 二叉树的锯齿形层序遍历
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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  let rst: number[][] = [];

  if (!root) {
    return rst;
  }

  let queue: TreeNode[] = [];
  let toRight = true;

  queue.push(root);

  while (queue.length) {
    let len = queue.length;
    let tmp: number[] = [];

    for (let i = 0; i < len; i++) {
      const { val, left, right } = queue.shift()!;
      if (left) queue.push(left);
      if (right) queue.push(right);
      tmp.push(val);
    }

    if (!toRight) {
        tmp = tmp.reverse();
    }

    toRight = !toRight;
    rst.push(tmp);
  }

  return rst;
}
// @lc code=end
