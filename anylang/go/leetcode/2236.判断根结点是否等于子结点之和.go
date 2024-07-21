package leetcode

import "fmt"

func checkTree(root *TreeNode) bool {
	return root.Val == root.Left.Val+root.Right.Val
}

func CheckTree() {

	root := TreeNode{
		Val: 3,
		Left: &TreeNode{
			Val: 2,
		},
		Right: &TreeNode{
			Val: 1,
		},
	}

	fmt.Println("CheckTree: ", checkTree(&root))
}
