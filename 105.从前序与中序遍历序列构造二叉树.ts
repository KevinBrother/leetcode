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
    const root = new TreeNode(preorder[0]);
    
    function createTree(preorder: number[], inorder: number[], root: TreeNode) {
        const  {leftInorderArr, rightInorderArr, leftPreArr, rightPreArr} = getSideArrays(preorder, inorder, root);
  
        if(leftPreArr.length) {
            root.left = new TreeNode(leftPreArr[0]);
            createTree(leftPreArr, leftInorderArr, root.left);
        }
  
        if(rightPreArr.length) {
            root.right = new TreeNode(rightPreArr[0]);
            createTree(rightPreArr, rightInorderArr, root.right);
        }
    }

    createTree(preorder, inorder, root);

    return root;
};

function getSideArrays(preorder: number[], inorder: number[], root: TreeNode) {
    const inorderRootIndex = inorder.findIndex(item => item === root.val);
    const leftInorderArr = inorder.slice(0, inorderRootIndex);
    const rightInorderArr = inorder.slice(inorderRootIndex + 1);

    const leftPreArr = preorder.slice(1, leftInorderArr.length + 1);
    const rightPreArr = preorder.slice(leftInorderArr.length + 1);

    return {leftInorderArr, rightInorderArr, leftPreArr, rightPreArr};
} 


console.log('first', buildTree([3,9,20,15,7],  [9,3,15,20,7]))

// preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// 输出: [3,9,20,null,null,15,7]
// @lc code=end

//      3 
//     /  \
//   9     20
//         / \
//        15  7 
