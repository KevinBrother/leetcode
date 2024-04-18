/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

// function isSymmetric(root: TreeNode | null): boolean {
//     if(root === null) {
//         return true;
//     }

//     if(root.left?.val !== root.right?.val) {
//         return false;
//     }

//     return isSymmetric(root.left) && isSymmetric(root.right)
// };
function isSymmetric(root: TreeNode | null): boolean {
    function recursive(left: TreeNode | null, right: TreeNode | null) {
        if(left === null && right === null) {
            return true;
        }

        if(left?.val !== right?.val) {
            return false;
        }
        // @ts-ignore
        return recursive(left?.left, right?.right) && recursive(left?.right, right?.left)
    }

    return recursive(root, root)
};



// @lc code=end

