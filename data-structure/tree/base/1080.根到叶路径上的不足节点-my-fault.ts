/*
 * @lc app=leetcode.cn id=1080 lang=typescript
 *
 * [1080] 根到叶路径上的不足节点
 */

import { TreeNode } from "../../../util/listNode";
import { buildTree } from "../105.从前序与中序遍历序列构造二叉树";

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

function sufficientSubset(root: TreeNode | null,limit: number): TreeNode | null {
  function dfs(node, sum) {
    if (node === null) {
      return false; // false 为删, 默认删除
    }

    sum += node.val;

    let leftFlag = dfs(node.left, sum);

    if (!leftFlag) {
      node.left = null;
    }

    let rightFlag = dfs(node.right, sum);

    if (!rightFlag) {
      node.right = null;
    }
    return sum >= limit || leftFlag || rightFlag;
  }

  return dfs(root, 0) ? root : null;
}
// @lc code=end
/* const root = buildTree(
  [1, 2, 4, 8, 9, -99, -99, -99, 3, -99, 12, 13, 7, -99, 14],
  [8, 4, 9, 2, -99, -99, -99, 1, 12, -99, 13, 3, -99, 7, 14]
);

console.log("🚀 ~ sufficientSubset(root, 1):", sufficientSubset(root, 1))

 */
const root = buildTree(
  [1, 2, -5, -3, 4],
  [-5, 2, 1, 4, -3]
);

console.log("🚀 ~ sufficientSubset(root, 1):", sufficientSubset(root, 1))

// function recursive(num) {
//     if(num === 10) {
//         return;
//     }

//     num += 1;
//     recursive(num)

//     console.log(num);
// }

// recursive(0)
