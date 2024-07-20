/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

#include <stdbool.h>
#include <stdio.h>

#include "tree.h"

bool checkTree(struct TreeNode* root) {
    return root->val == root->left->val + root->right->val ? true : false;
}

int main() {
    struct TreeNode root, left, right;
    root.val = 3;
    left.val = 1;
    right.val = 2;
    root.left = &left;
    root.right = &right;

    struct TreeNode root2 = {
        val : 3,
        left : &(struct TreeNode){
            val : 2
        },
        right : &(struct TreeNode){
            val : 2
        }
    };

    bool rootRst = checkTree(&root);
    bool root2Rst = checkTree(&root2);

    printf("rootRst is : %s\n", rootRst ? "true" : "false");
    printf("root2Rst is : %s\n", root2Rst ? "true" : "false");

    return 0;
}