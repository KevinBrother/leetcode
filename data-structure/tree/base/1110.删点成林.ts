/*
 * @lc app=leetcode.cn id=1110 lang=typescript
 *
 * [1110] 删点成林
 */

import { buildTree } from "./data-structure/tree/105.从前序与中序遍历序列构造二叉树";
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

function delNodesError1(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
    const rst = new Set<TreeNode>();

    function dfs(node, head) {
        if(node === null) {
            rst.add(head);
            return true; // 是否需要负节点删除自己  true 则是要删除
        }

        let isDelete = to_delete.includes(node.val);

        let leftFlag = dfs(node.left, isDelete ? node.left: head);
        if(leftFlag) {
            node.left = null;
        }

        let rightFlag = dfs(node.right, isDelete ? node.right: head);

        if(rightFlag) {
            node.right = null;
        }

        return isDelete;
    }

    dfs(root, root);

    return [...rst];
};

function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
 
    const rst: Array<TreeNode | null> = [];

    function dfs(node) {
        if(node === null) {
            return;
        }

        node.left = dfs(node.left);
        node.right = dfs(node.right);
        
        if(!to_delete.includes(node.val)) {
            return node;
        };

        if(node.left) {
            rst.push(node.left);
        }
        
        if(node.right) {
            rst.push(node.right);
        }
        
        return null;
    }

    let first = dfs(root);

    if(first) {
        rst.push(first)
    }

    return rst;
};

const root = buildTree(
    [1, 2, -5, -3, 4],
    [-5, 2, 1, 4, -3]
  );

 
  console.log("🚀 ~ delNodes ~ delNodes:", delNodesError1(root, [2,4]))
// @lc code=end

