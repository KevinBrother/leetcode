/*
 * @lc app=leetcode.cn id=889 lang=typescript
 *
 * [889] 根据前序和后序遍历构造二叉树
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

function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {
    // 前序的后一个元素为当前元素的左节点，后续的前一个节点为当前元素的右节点
    function createTree(preorder: number[], postorder: number[], len: number) {
        if(!len) {
            return null;
        }

        const node = new TreeNode(preorder[0]);
        if(len > 1) {
            let nextNodeIndex = postorder.findIndex(val => val === preorder[1]);
            node.left= createTree(preorder.slice(1, nextNodeIndex + 2), postorder.slice(0, nextNodeIndex +1), nextNodeIndex +1)
            node.right = createTree(preorder.slice(nextNodeIndex + 2), postorder.slice(nextNodeIndex + 1, -1), len - nextNodeIndex - 2)
        }

        return node;
    }

    return createTree(preorder, postorder, preorder.length);
};


console.log('first', constructFromPrePost([1,2,4,5,3,6,7], [4,5,2,6,7,3,1]))

// @lc code=end

//       1 
//      /  \
//    2     3
//   / \    / \
//  4   5  6   7 
  