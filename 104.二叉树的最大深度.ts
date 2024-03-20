/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
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

// function recursive(node:TreeNode | null) {
//     if(node === null) {
//         return null;
//     }
//     recursive(node.left);
//     recursive(node.right);
// }

function recursive(node: TreeNode | null) {
  if (node === null) {
    return null;
  }
  recursive(node.left);
  recursive(node.right);
}

function maxDepth(root: TreeNode | null): number {
  let result = 0;

  let max = 0;
  function recursive(node: TreeNode | null) {
    if (node === null) {
      result = Math.max(result, max);
      return;
    }
    ++max;
    recursive(node.left);
    recursive(node.right);
    --max;
  }

  recursive(root);

  return result;
}


// @lc code=end
