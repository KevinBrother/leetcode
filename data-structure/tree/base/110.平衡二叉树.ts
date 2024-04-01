/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
 */

import { buildTree } from "../105.从前序与中序遍历序列构造二叉树";
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

//  在AVL树中，任一节点对应的两棵子树的最大高度差为1
function isBalanced(root: TreeNode | null): boolean {

  function dfs(root: TreeNode | null) {
    if (root === null) {
      return 0;
    }

    let leftDepth = dfs(root.left);

    if (leftDepth === -1) {
        return -1;
    }

    let rightDepth = dfs(root.right);

    if (rightDepth === -1) {
      return -1;
    }

    let div = Math.abs(rightDepth - leftDepth);

    return div > 1 ? -1 : Math.max(rightDepth, leftDepth) + 1;
  }


  return dfs(root) === -1 ? false : true;
}

// const tree = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
const tree = buildTree([1, 2, 4, 8, 5, 3, 6], [8, 4, 2, 5, 1, 6, 3]);
console.log("🚀 ~ isBalanced ~ isBalanced:", isBalanced(tree));

// @lc code=end
