/*
 * @lc app=leetcode.cn id=2415 lang=typescript
 *
 * [2415] 反转二叉树的奇数层
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

export function reverseOddLevels(root: TreeNode | null): TreeNode | null {
  if (!root) return root;

  let queue: TreeNode[] = [];
  queue.push(root);

  let isOdd = true;

  while (queue.length) {
    const len = queue.length;
    let values: number[] = [];

    for (let i = 0; i < len; i++) {
      const node = queue.shift()!;
      const { left, right } = node;
      if (left) {
        queue.push(left);
        values.push(left.val);
      }
      if (right) {
        values.push(right.val);
        queue.push(right);
      }
    }

    if (isOdd) {
      values.reverse();
      for (let i = 0; i < queue.length; i++) {
        queue[i].val = values[i];
      }
    }

    isOdd = !isOdd;
  }

  return root;
}
// @lc code=end
