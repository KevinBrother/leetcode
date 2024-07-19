#include <stdbool.h>
#include <stdio.h>

#include "tree.hpp"

class Solution {
   public:
    bool checkTree(TreeNode* root) {
        return root->val == root->right->val + root->left->val ? true : false;
    }
};

int main() {
    struct TreeNode root, left, right;
    root.val = 3;
    left.val = 1;
    right.val = 2;
    root.left = &left;
    root.right = &right;

    struct TreeNode root2 = {
        3,
        new TreeNode(3),
        new TreeNode(1)};

    Solution s;

    bool rootRst = s.checkTree(&root);
    bool root2Rst = s.checkTree(&root2);

    printf("rootRst is : %s\n", rootRst ? "true" : "false");
    printf("root2Rst is : %s\n", root2Rst ? "true" : "false");

    return 0;
}