package tests

import (
	"fmt"
	"testing"
)

/*
给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

你可以按 任何顺序 返回答案。

示例 1：

输入：n = 4, k = 2
输出：
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
示例 2：

输入：n = 1, k = 1
输出：[[1]]


提示：

1 <= n <= 20
1 <= k <= n

*/

func TestCombine(t *testing.T) {
	rst := combine(3, 2)
	fmt.Println("rst: ", rst)
}

func combine(n int, k int) [][]int {
	var rst [][]int
	var path []int

	var dfs func(int)
	dfs = func(i int) {
		if len(path) == k {
			rst = append(rst, append([]int(nil), path...))
		}

		for j := i; j < n; j++ {
			path = append(path, j+1)
			dfs(j + 1)
			path = path[:len(path)-1]
		}
	}

	dfs(0)
	return rst
}
