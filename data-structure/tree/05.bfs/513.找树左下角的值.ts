/*
 * @lc app=leetcode.cn id=513 lang=typescript
 *
 * [513] 找树左下角的值
 */

import { TreeNode } from "./util/listNode";

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

function findBottomLeftValue(root: TreeNode | null): number {
  let rst: number[] = [];
  let queue: TreeNode[] = [];
  queue.push(root!);

  while (queue.length) {
    rst = [];
    let len = queue.length;
    for(let i = 0; i < len; i++) {
        let {val, left, right} = queue.shift()!;
        if(left) queue.push(left);
        if(right) queue.push(right);
        rst.push(val);
    }
  }

  return rst[0];
}
// @lc code=end
