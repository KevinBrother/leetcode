/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
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

// 前序遍历
function isValidBSTPre(root: TreeNode | null): boolean {
  function dfs(node, min, max) {
    if (node === null) {
      return true;
    }

    if (node.val <= min || node.val >= max) {
      return false;
    }

    let leftValidBST = dfs(node.left, min, node.val);
    let rightValidBST = dfs(node.right, node.val, max);

    return leftValidBST && rightValidBST;
  }

  return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

// 中序遍历
function isValidBSTMid(root: TreeNode | null): boolean {
  function dfs(node, min, max) {
    if (node === null) {
      return true;
    }

    let leftValidBST = dfs(node.left, min, node.val);

    if (node.val <= min || node.val >= max) {
      return false;
    }

    let rightValidBST = dfs(node.right, node.val, max);

    return leftValidBST && rightValidBST;
  }

  return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function isValidBST(root: TreeNode | null): boolean {
  function dfs(node, min, max) {
    if (node === null) {
      return true;
    }

    let leftValidBST = dfs(node.left, min, node.val);
    let rightValidBST = dfs(node.right, node.val, max);

    if (node.val <= min || node.val >= max) {
      return false;
    }

    return leftValidBST && rightValidBST;
  }

  return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

// @lc code=end
