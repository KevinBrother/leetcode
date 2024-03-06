/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    
    function createTree(preorder: number[], inorder: number[], len: number) {
        if(len === 0) {
            return null;
        }
        const node = new TreeNode(preorder[0]);

        const inorderRootIndex = inorder.findIndex(item => item === node.val);
        
        node.left = createTree(preorder.slice(1, inorderRootIndex + 1), inorder.slice(0, inorderRootIndex + 1), inorderRootIndex);
        node.right = createTree(preorder.slice(inorderRootIndex + 1), inorder.slice(inorderRootIndex + 1), len - inorderRootIndex -1);
        return node;
    }

    return createTree(preorder, inorder, preorder.length);

};

console.log('first', buildTree([3,9,20,15,7],  [9,3,15,20,7]))

// preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// 输出: [3,9,20,null,null,15,7]
// @lc code=end

//      3 
//     /  \
//   9     20
//         / \
//        15  7 
