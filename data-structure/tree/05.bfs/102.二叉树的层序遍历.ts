/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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

export function levelOrder(root: TreeNode | null): number[][] {
  let rst: number[][] = [];

  if (!root) {
    return rst;
  }

  let queue: (TreeNode | null)[] = [];

  queue.push(root);

  while (queue.length) {
    let length = queue.length;
    let tmp: number[] = [];

    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      if(node) {
          tmp.push(node.val)
        }
      if (node?.left) queue.push(node.left);
      if (node?.right) queue.push(node.right);
    }
    rst.push(tmp);
  }

  return rst;
}
// @lc code=end
