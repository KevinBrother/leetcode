/*
 * @lc app=leetcode.cn id=107 lang=typescript
 *
 * [107] 二叉树的层序遍历 II
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

function levelOrderBottom(root: TreeNode | null): number[][] {
  let rst: number[][] = [];

  if (!root) {
    return rst;
  }

  let queue: TreeNode[] = [];
  queue.push(root);

  while(queue.length) {
    let len = queue.length;
    let sons: number[] = [];
    for(let i = 0; i < len; i++) {
        let {val, left, right} = queue.shift()!;

        if(left) queue.push(left);
        if(right) queue.push(right);

        sons.push(val);
    }

    rst.push(sons);
  }

  return rst.reverse();
}
// @lc code=end
